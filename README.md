# query-file-content

A module to query file content from pdf, doc, docx, and odt formates built on the textract module

## Install

```
npm install query-file-content
```

## Extraction Requirements

Note, if any of the requirements below are missing, textract will run and extract all files for types it is capable. Not having these items installed does not prevent you from using textract, it just prevents you from extracting those specific files.

- `PDF` extraction requires `pdftotext` be installed, [link](http://www.foolabs.com/xpdf/download.html)
- `DOC` extraction requires `antiword` be installed, [link](http://www.winfield.demon.nl/), unless on OSX in which case textutil (installed by default) is used.
- `RTF` extraction requires `unrtf` be installed, [link](https://www.gnu.org/software/unrtf/), unless on OSX in which case textutil (installed by default) is used.
- `PNG`, `JPG` and `GIF` require `tesseract` to be available, [link](http://code.google.com/p/tesseract-ocr/). Images need to be pretty clear, high DPI and made almost entirely of just text for `tesseract` to be able to accurately extract the text.
- `DXF` extraction requires `drawingtotext` be available, [link](https://github.com/davidworkman9/drawingtotext)
