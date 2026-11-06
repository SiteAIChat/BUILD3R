---
title: "The movers are booked. The flooring crew just rescheduled."
industry: "Property management"
summary: "A vendor changes the date in an email. The leasing team still sees a Friday move-in."
order: 2
companion: "vendor-renewals"
invitation: "Bring a unit whose move-in date changed. We’ll trace how the news reached leasing."
---

On Wednesday afternoon, the leasing office gets a call from the incoming resident of 214. “Can I tell the movers to come at nine on Friday?” The leasing system still says Friday. Across the property, the maintenance supervisor has just received a vendor email moving the flooring job to Friday afternoon. Each person has half the answer.

An agent with access to the vendor inbox and the move-in schedule could match the unit number in the email to the resident’s date. Before the leasing agent makes a promise, she’d see the conflict and the original message. The supervisor could call the flooring crew about an earlier slot, and leasing could tell the resident when to expect a firm answer. The outcome to watch is how often the team catches a conflict *before* someone books a truck.

## How we’d build it

The unit number makes the match look easy. But the flooring contractor might write “214 at Preston,” and the operator might manage two properties on Preston Road. We’d give the supervisor the original email and both candidate units whenever the address is uncertain. Only a confirmed match should put a move-in on the leasing team’s radar.

## What we’d test first

We’d replay several past turns, including one where flooring slipped but the move-in had already been moved too. We’d ask leasing which alerts would have changed what they told a resident. That answer matters more than the number of emails the agent read.
