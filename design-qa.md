# Design QA

Source references:

- `/var/folders/sy/3wp4xmjx3ql0njcx78c5hgw40000gn/T/TemporaryItems/NSIRD_screencaptureui_nnwsY1/Screenshot 2569-09-30 at 10.21.09.png`
- `/var/folders/sy/3wp4xmjx3ql0njcx78c5hgw40000gn/T/TemporaryItems/NSIRD_screencaptureui_zgp6td/Screenshot 2569-09-30 at 10.59.31.png`
- `/var/folders/sy/3wp4xmjx3ql0njcx78c5hgw40000gn/T/TemporaryItems/NSIRD_screencaptureui_nQKcJr/Screenshot 2569-09-30 at 11.22.13.png`

Prototype capture:

- `verification-pdio-p-guideline-1122.png`

Checks:

- Reference screenshot: 3402 x 1784 pixels.
- Reference cyan guides measured at x=83/84 and x=741/742, y=136/137, y=237/238, and y=714/715.
- Large PDIO P mark element position: x=40, y=144.
- Large PDIO P mark element size: width=464, height=481.
- Rendered visible alpha left edge: x=55.
- Rendered visible alpha right edge: x=494.
- Rendered visible alpha top edge: y=158.
- The hero-bottom guideline crosses the mark at source row 1278, matching the supplied guide.
- The large mark is layered under the hero menu/search controls, so it does not cover menu text or input controls.
- Mark uses the supplied `PDIO only P.png` artwork as `pdio-p-mark.png`.
- Mark is hidden outside the home view so it does not cover template browsing pages.

Final result: passed.
