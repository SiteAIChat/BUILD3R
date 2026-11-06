---
title: "The invoice is marked “pending.” Who has to do what?"
industry: "Office and finance"
summary: "A repair spans two branches. A nine-day delay comes down to one line nobody has signed off."
order: 3
companion: "backup-approver"
invitation: "Bring an invoice that sat for a week. We’ll follow it from receipt to the person who could move it forward."
---

A controller opens a $3,800 repair invoice that’s been pending for nine days. The branch manager already replied, “The work looks good.” Accounts payable is still waiting. The missing piece is in the second sentence of his email: one line belongs to the other branch.

An agent could put the invoice lines, purchase orders and manager’s reply side by side. The first branch has confirmed its portion. The second branch still needs to identify the repair billed to it. Now the controller can ask one person one specific question, with the relevant line attached. A useful measure here is how many days pass between that first reply and the invoice reaching the authorized approver.

## How we’d build it

We’d connect one payable inbox and the approval history for that branch. AI can interpret the reply and point to the disputed line. The accounting system can show whether an approval actually posted. If the two disagree, finance sees both records. A friendly email about the work should never silently authorize payment.

## What we’d test first

Try the workflow on last month’s stalled bills. Ask the clerk who sorted each one whether the alert identifies the same person and the same missing detail. Record how long it takes to get an actionable answer, including the time spent correcting a bad match.
