const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const os = require("os");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json({ limit: "5mb" }));

/**
 * so we are using pdfLatex for executing the compilation of .tex --> .pdf
 * And hence we need to create a temporary working directory where we can store .tex file
 * And also store the generated .pdf file.
 * */
app.post("/compile", (req, res) => {
  const { latexCode } = req.body;

  // Create temporary folder + save .tex file
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "latex-"));
  const texPath = path.join(tempDir, "resume.tex");
  fs.writeFileSync(texPath, latexCode);

  // Run pdflatex
  exec(
    `pdflatex -interaction=nonstopmode -halt-on-error resume.tex`,
    { cwd: tempDir, timeout: 15000 },

    (error, stdout, stderr) => {
      if (error) {
        return res.status(500).json({ error: "Compilation failed" });
      }
      const pdfPath = path.join(tempDir, "resume.pdf");
      const pdf = fs.readFileSync(pdfPath);
      res.setHeader("Content-Type", "application/pdf");
      res.send(pdf);

      fs.rm(tempDir, { recursive: true, force: true }, () => {});
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
