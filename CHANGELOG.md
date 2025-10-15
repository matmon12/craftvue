# Changelog

## [1.1.1](https://www.npmjs.com/package/craftvue/v/1.1.1) (2025-10-16)

#### Bug fixes

- Changed dependency `@craftvue/icons` to `1.1.3`

## [1.1.0](https://www.npmjs.com/package/craftvue/v/1.1.0) (2025-10-15)

#### Features

- Added resolver components in `craftvue` for automatically import components
- Added support of putting styles on root element in `CInput`
- Added `useAttrs` composable

#### Bug fixes

- Changed styles for `CTabs` component
- Fix styles for different states of `CInput`
- Setting sizes for shallow SVGs in `CIcon`
- Added support for string values for `value` and `max` props in `CBadge`

#### Refactors

- Added interface `IconSlots` in `CIcon` component
- Added default value for required prop in `CFormItem` component
- Added interface `FormItemSlots` in `CFormItem`
- Renamed prop `label` to `labelSlot` in `CFormItem` component
- Changed padding in styles for `CBadge`
- Added interface `BadgeSlots` in `CBadge`
- Renamed slot `value` to `content` in `CBadge` component
- Removed `BadgeSeverity` type from `CBadge`
- Reduced `border-radius` for `CButton` and `CInput`
- Added `BaseButtonProps` interface for `CButton`
- Added `BaseInputProps` and `InputSlots` interfaces for `CInput`
- Removed default values for `icon`, `size` and `label` props in `CButton`
- Changed `disabled` computed property in `CButton`
- Added default value for props in `CInput`
- Added categories files for utils

## [1.0.4](https://www.npmjs.com/package/craftvue/v/1.0.4) (2025-09-30)

#### Features

- Added scripts for publishing, development and building (production)
- Added variables for fonts in `styles/_vars.scss`

#### Bug fixes

- Changed global styles in `styles/_style.scss`

#### Refactors

- Remove function `capitalizeFirstLetter` from utils
- Remove font Montserrat from assets
- Remove `styles/_fonts.scss`

## [1.0.3](https://www.npmjs.com/package/craftvue/v/1.0.3) (2025-09-29)

#### Bug fixes

- Changed `@craftvue/icons` dependency to `1.0.0` for production

## [1.0.0](https://www.npmjs.com/package/craftvue/v/1.0.0) (2025-09-28)

#### Features

- Initial release
- `@craftvue/icons` and `craftvue` packages added
- Added `CButton`, `CInput`, `CBadge`, `CIcon`, `CTabs`, `CTabList`, `CTab`, `CFormItem` components
- Added `HomeIcon`, `CheckIcon`, `AddIcon` icons
