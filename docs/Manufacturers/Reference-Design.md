---
sidebar_position: 50
---


# Reference Design

Design
Please read the page [Rotorflight FC Design Requirements](./Design-Requirements.md) first. It is explaining the generic requirements for all Rotorflight designs.

__For an FC to be fully supported by Rotorflight-2, it _must_ follow one of the reference designs.__

RF2 will offer more features and easier configurability for designs that are fully compatible.

Lots of effort has been put into these designs for making sure they are as flexible as possible, while not imposing any hardware limitations on the functionality. The manufacturer can choose not to implement any features that are marked _optional_. All other features must be implemented.

The reference designs are considering only the aspects that have effect on the software support, mostly the STM32 resource allocation and the minimum set of supported features. The rest - like size, form factor, connector locations - are left for the manufacturer to decide.

[Rotorflight Reference Design Github](https://github.com/rotorflight/rotorflight-ref-design)

- [Reference Design F7A](https://github.com/rotorflight/rotorflight-ref-design/blob/master/Reference-Design-F7A.md)  
- [Reference Design F7B](https://github.com/rotorflight/rotorflight-ref-design/blob/master/Reference-Design-F7B.md)