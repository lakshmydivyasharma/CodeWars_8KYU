https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

8 kyu
DNA to RNA Conversion
2446589% of 3,1188,407 of 26,236torret1 Issue Reported
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

// When converting DNA to RNA, the only character we have to worry about changing is the T.

// first use the replace method we want to replace the T in DNA and replace it with a U to make it RNA.
// return this statement:
// return dna.replace("T", "U");
// /T/g that will globally, replace every instance of T and replace it with U

function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}
