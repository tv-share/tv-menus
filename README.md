# tv-menus

A collection of menu components
## Components

- [Header](#header) - A Header with logo and clickable items
- [Sidebar](#sidebar) - A exapandable Sidebar with clickable items

## Docs
### Header
_Header with logo, a tab bar and options on the right_

**Field** | **Type** | **Description**
--- | :---: | ---
className | string |
items | array | array of [items](#header-items)
logo | string | url to logo image.
logoClickAction | func |
options | array | array of [options](#header-options)
title | string |

#### header items
Placed in the left side next to the title

**Field** | **Type** | **Description**
--- | :---: | ---
id | string | (required)
name | string | (required)
clickAction | func |

#### header options
Placed in the far right side

**Field** | **Type** | **Description**
--- | :---: | ---
id | string | (required)
clickAction | func |
img | string | url to icon image
name | string |

### Sidebar
_Sidebar with exanpadle option_

**Field** | **Type** | **Description**
--- | :---: | ---
className | string |
expandable | bool | Default false
items | array | array of [items](#sidebar-items)

#### sidebar items

**Field** | **Type** | **Description**
--- | :---: | ---
id | string | (required)
label | string | (required)
clickAction | func |
icon | string | Required when _expandable_ is _true_


## Development
For delevepment checkout [this section](https://github.com/shareThevelopment/tv-handbook/Development).