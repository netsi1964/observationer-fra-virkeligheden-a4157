---
title: Her finder du mig
img_alt: Post in the door mailbox
form_id: contactForm
form_action: /contact-success
form_fields:
  - input_type: text
    name: name
    label: Navn
    default_value: Dit navn
    is_required: true
  - input_type: email
    name: email
    label: E-mail
    default_value: Din e-mail adresse
    is_required: true
  - input_type: select
    name: subject
    label: Subject
    default_value: Hvad handler dette om?
    options:
      - Error on the site
      - Sponsorship
      - Other
  - input_type: textarea
    name: message
    label: Message
    default_value: Your message
  - input_type: checkbox
    name: consent
    label: >-
      I understand that this form is storing my submitted information so I can
      be contacted.
submit_label: Send Message
seo:
  title: Get in Touch
  description: This is the contact page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Get in Touch
      keyName: property
    - name: 'og:description'
      value: This is the contact page
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: Get in Touch
    - name: 'twitter:description'
      value: This is the contact page
template: contact
---

Fill the form below to get in touch with me.
