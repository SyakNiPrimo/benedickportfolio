# Calendly Automation Setup

Use this guide to make the 30-minute discovery call feel more professional and reduce manual back-and-forth.

Calendly event link:
https://calendly.com/benedick-tiaga04/30min

## Goal

When someone books a call, they should automatically answer the key discovery questions before the meeting. You should receive those answers in the Calendly booking notification so you can prepare.

## Event Type Settings

Open Calendly and edit the `30min` event type.

Recommended event name:
`30-Minute Business Support Discovery Call`

Recommended description:

```text
Use this call to talk through your website, workflow, automation, backend support, content support, or outsourcing support needs. After you book, I will review your answers and use the call to recommend the best next step.
```

Recommended location:
Google Meet, Zoom, or phone call. Use one default meeting location so every booking is consistent.

## Invitee Questions

Calendly allows up to 10 custom invitee questions per event type. Keep this event to 7 required questions so serious prospects give you enough context without feeling overwhelmed.

Add these in this order:

| # | Question | Type | Required | Options / Notes |
|---|---|---|---|---|
| 1 | What is your business or company name? | One line | Yes | Helps identify the lead. |
| 2 | What website or online profile should I review before the call? | One line | No | Ask for website, LinkedIn, Instagram, or current landing page. |
| 3 | What do you need help with? | Checkboxes | Yes | Website or landing page; Automation or workflow cleanup; Backend/admin support; Short-form video/content support; Ongoing outsourcing support; Not sure yet |
| 4 | What problem are you trying to solve right now? | Multiple lines | Yes | Main discovery context. |
| 5 | What tools or platforms are involved? | Multiple lines | No | Examples: WordPress, Google Sheets, CRM, email, Shopify, Canva, CapCut. |
| 6 | How soon do you need help? | Dropdown | Yes | ASAP; This week; This month; Planning ahead |
| 7 | Are you looking for a one-time project or ongoing support? | Radio buttons | Yes | One-time project; Monthly support; Long-term outsourcing support; Not sure yet |

Optional 8th question if you want stronger qualification:

| # | Question | Type | Required | Options / Notes |
|---|---|---|---|---|
| 8 | What budget or support level are you comfortable starting with? | Radio buttons | No | Small first task; Project sprint; Monthly support; I need guidance |

## Automated Reminder

If your Calendly plan includes Workflows, create this reminder:

Trigger:
`Before event starts`

Timing:
`24 hours before`

Action:
`Send email to invitee`

Subject:

```text
Quick prep for our discovery call
```

Body:

```text
Hi {{invitee_first_name}},

Thanks for booking a call. Before we meet, please make sure you have any useful links ready, such as your website, workflow notes, CRM/form details, content examples, or the specific task you want help with.

We will use the call to understand what you need, clarify the next best step, and decide whether a project sprint, monthly support, or ongoing outsourcing support makes the most sense.

Talk soon,
Benedick
```

## Automated Follow-Up

Create this follow-up:

Trigger:
`Event ends`

Timing:
`1 hour after`

Action:
`Send email to invitee`

Subject:

```text
Thanks for the call
```

Body:

```text
Hi {{invitee_first_name}},

Thanks for taking the time to talk through your business support needs.

I’ll review what we discussed and follow up with the recommended next step. Depending on the scope, that may be a smaller first task, a project sprint, monthly support, or a custom outsourcing support plan.

Best,
Benedick
```

## Optional No-Show Workflow

Trigger:
`No-show marked`

Action:
`Send email to invitee`

Subject:

```text
Want to reschedule?
```

Body:

```text
Hi {{invitee_first_name}},

Looks like we missed each other. If you still need support with your website, workflow, backend tasks, or content process, you can book another time here:

https://calendly.com/benedick-tiaga04/30min

Best,
Benedick
```

## Call Flow

Use the invitee answers to guide the meeting.

1. Confirm what their business does.
2. Repeat the problem they wrote in their booking answers.
3. Ask what they have already tried.
4. Clarify the business outcome they want.
5. Identify whether the need is one-time, monthly, or long-term.
6. Explain the recommended next step.
7. Tell them when you will follow up.

Closing line:

```text
Based on what you shared, I think the best next step is either a project sprint, monthly support, or a smaller first task so we can test the workflow. I’ll send you a short summary and recommended next step after this call.
```
