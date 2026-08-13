// Copy to content/classified/<slug>.js, fill in, then add a <script src>
// line to index.html under the "classified" comment.
//
// Optional: add `hidden: true` to park it without deleting it.
EXITZERO.classified({
  slug:  'my-writeup',           // becomes ./my-writeup/ on the page
  title: 'My Writeup',           // the heading
  desc:  'What was taken apart, and what came out of it.',
  stack: ['Ghidra', 'ARM'],
});
