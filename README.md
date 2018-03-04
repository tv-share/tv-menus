# tv-menus

A collection of menu components
## Components

- [Header](#header) - A Header with logo and clickable items
- [Sidebar]() - A Sidebar with logo and clickable items

## Docs
### Header
_Header with logo, a tab bar and options on the right_

**Field** | **Type** | **Description**
--- | :---: | ---
className | string |
items | array | array with [item](items) objects as decribed below.
logo | string | url to logo image.
logoClickAction | func |
options | array | array with [option](options) objects as described below. 
title | string |

#### items
Placed in the left side next to the title

**Field** | **Type** | **Description**
--- | :---: | ---
id | string | (required)
name | string | (required)
clickAction | func |

#### options
Placed in the far right side

**Field** | **Type** | **Description**
--- | :---: | ---
id | string | (required)
clickAction | func |
img | string | url to icon image
name | string |


## Development
For delevepment checkout [this section](https://github.com/shareThevelopment/tv-handbook/Development).