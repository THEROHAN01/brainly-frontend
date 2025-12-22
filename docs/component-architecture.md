# Component Architecture - Atomic Design System

## Design Philosophy

We'll follow **Atomic Design Principles** to create a highly modular, reusable component system:

- **Atoms**: Smallest building blocks (buttons, inputs, icons, labels)
- **Molecules**: Simple combinations of atoms (form fields, search bars)
- **Organisms**: Complex UI sections (forms, navigation, content grids)
- **Templates**: Page-level layouts
- **Pages**: Actual page implementations

## Directory Structure

```
src/
├── components/
│   ├── atoms/           # Smallest building blocks
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Label/
│   │   ├── Text/
│   │   ├── Heading/
│   │   ├── Badge/
│   │   ├── Avatar/
│   │   ├── Spinner/
│   │   ├── Checkbox/
│   │   ├── Radio/
│   │   ├── Switch/
│   │   ├── Icon/
│   │   ├── Divider/
│   │   └── Link/
│   │
│   ├── molecules/       # Simple component combinations
│   │   ├── FormField/
│   │   ├── SearchBar/
│   │   ├── Dropdown/
│   │   ├── Toast/
│   │   ├── Tooltip/
│   │   ├── Card/
│   │   ├── MenuItem/
│   │   ├── TabItem/
│   │   ├── Breadcrumb/
│   │   └── Pagination/
│   │
│   ├── organisms/       # Complex UI sections
│   │   ├── Header/
│   │   ├── Sidebar/
│   │   ├── Navigation/
│   │   ├── AuthForm/
│   │   ├── ContentGrid/
│   │   ├── FilterPanel/
│   │   ├── Modal/
│   │   └── UserProfile/
│   │
│   ├── templates/       # Page layouts
│   │   ├── AuthLayout/
│   │   ├── DashboardLayout/
│   │   └── MainLayout/
│   │
│   └── providers/       # Context providers
│       ├── ThemeProvider/
│       ├── ToastProvider/
│       └── AuthProvider/
│
├── pages/               # Page implementations
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── types/               # TypeScript type definitions
├── constants/           # App constants
└── styles/              # Global styles
```

## Detailed Component Breakdown

### ATOMS (Basic Building Blocks)

#### 1. Button
**File**: `src/components/atoms/Button/Button.tsx`
```typescript
Props:
- variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
- size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
- fullWidth: boolean
- disabled: boolean
- loading: boolean
- icon?: ReactNode
- iconPosition: 'left' | 'right'
- onClick: () => void
- type: 'button' | 'submit' | 'reset'
- className?: string
```

#### 2. Input
**File**: `src/components/atoms/Input/Input.tsx`
```typescript
Props:
- type: 'text' | 'email' | 'password' | 'number' | 'search' | 'url'
- placeholder?: string
- value: string
- onChange: (value: string) => void
- disabled: boolean
- readOnly: boolean
- error: boolean
- size: 'sm' | 'md' | 'lg'
- className?: string
- ref?: Ref
```

#### 3. Label
**File**: `src/components/atoms/Label/Label.tsx`
```typescript
Props:
- htmlFor?: string
- required?: boolean
- size: 'sm' | 'md' | 'lg'
- className?: string
- children: ReactNode
```

#### 4. Text
**File**: `src/components/atoms/Text/Text.tsx`
```typescript
Props:
- variant: 'body' | 'bodyLarge' | 'bodySmall' | 'caption'
- weight: 'normal' | 'medium' | 'semibold' | 'bold'
- color: 'default' | 'muted' | 'accent' | 'success' | 'error' | 'warning'
- align: 'left' | 'center' | 'right'
- as: 'p' | 'span' | 'div'
- className?: string
- children: ReactNode
```

#### 5. Heading
**File**: `src/components/atoms/Heading/Heading.tsx`
```typescript
Props:
- level: 1 | 2 | 3 | 4 | 5 | 6
- size: 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
- weight: 'normal' | 'medium' | 'semibold' | 'bold'
- color: 'default' | 'muted' | 'accent'
- className?: string
- children: ReactNode
```

#### 6. Badge
**File**: `src/components/atoms/Badge/Badge.tsx`
```typescript
Props:
- variant: 'default' | 'success' | 'error' | 'warning' | 'info'
- size: 'sm' | 'md' | 'lg'
- rounded: boolean
- children: ReactNode
- className?: string
```

#### 7. Avatar
**File**: `src/components/atoms/Avatar/Avatar.tsx`
```typescript
Props:
- src?: string
- alt: string
- fallback: string (initials)
- size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
- shape: 'circle' | 'square'
- status?: 'online' | 'offline' | 'away' | 'busy'
- className?: string
```

#### 8. Spinner
**File**: `src/components/atoms/Spinner/Spinner.tsx`
```typescript
Props:
- size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
- color: 'primary' | 'secondary' | 'white'
- className?: string
```

#### 9. Checkbox
**File**: `src/components/atoms/Checkbox/Checkbox.tsx`
```typescript
Props:
- checked: boolean
- onChange: (checked: boolean) => void
- disabled: boolean
- indeterminate: boolean
- size: 'sm' | 'md' | 'lg'
- className?: string
```

#### 10. Radio
**File**: `src/components/atoms/Radio/Radio.tsx`
```typescript
Props:
- checked: boolean
- onChange: (value: string) => void
- value: string
- name: string
- disabled: boolean
- size: 'sm' | 'md' | 'lg'
- className?: string
```

#### 11. Switch
**File**: `src/components/atoms/Switch/Switch.tsx`
```typescript
Props:
- checked: boolean
- onChange: (checked: boolean) => void
- disabled: boolean
- size: 'sm' | 'md' | 'lg'
- className?: string
```

#### 12. Icon
**File**: `src/components/atoms/Icon/Icon.tsx`
```typescript
Props:
- name: IconName (from icon library)
- size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
- color?: string
- className?: string
```

#### 13. Divider
**File**: `src/components/atoms/Divider/Divider.tsx`
```typescript
Props:
- orientation: 'horizontal' | 'vertical'
- spacing: 'sm' | 'md' | 'lg'
- className?: string
```

#### 14. Link
**File**: `src/components/atoms/Link/Link.tsx`
```typescript
Props:
- href: string
- external: boolean
- variant: 'default' | 'muted' | 'accent'
- underline: 'always' | 'hover' | 'none'
- children: ReactNode
- className?: string
```

---

### MOLECULES (Simple Combinations)

#### 1. FormField
**File**: `src/components/molecules/FormField/FormField.tsx`
```typescript
Combines: Label + Input + Text (error message) + Text (helper text)

Props:
- label: string
- name: string
- type: InputType
- value: string
- onChange: (value: string) => void
- error?: string
- helperText?: string
- required: boolean
- disabled: boolean
- placeholder?: string
- icon?: ReactNode
- iconPosition: 'left' | 'right'
```

#### 2. SearchBar
**File**: `src/components/molecules/SearchBar/SearchBar.tsx`
```typescript
Combines: Input + Icon (search) + Button (clear)

Props:
- value: string
- onChange: (value: string) => void
- onClear: () => void
- placeholder: string
- size: 'sm' | 'md' | 'lg'
- loading: boolean
```

#### 3. Dropdown
**File**: `src/components/molecules/Dropdown/Dropdown.tsx`
```typescript
Combines: Button + Portal + Menu Items

Props:
- trigger: ReactNode
- items: Array<{label, value, icon?, disabled?}>
- onSelect: (value: string) => void
- placement: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'
- closeOnSelect: boolean
```

#### 4. Toast
**File**: `src/components/molecules/Toast/Toast.tsx`
```typescript
Combines: Icon + Text + Button (close)

Props:
- variant: 'success' | 'error' | 'warning' | 'info'
- title: string
- description?: string
- duration: number
- onClose: () => void
- action?: {label: string, onClick: () => void}
```

#### 5. Tooltip
**File**: `src/components/molecules/Tooltip/Tooltip.tsx`
```typescript
Combines: Trigger element + Portal + Text

Props:
- content: string | ReactNode
- placement: 'top' | 'right' | 'bottom' | 'left'
- delay: number
- children: ReactNode
```

#### 6. Card
**File**: `src/components/molecules/Card/Card.tsx`
```typescript
Combines: Container + Icon + Text + Button

Props:
- title?: string
- description?: string
- footer?: ReactNode
- header?: ReactNode
- variant: 'default' | 'outlined' | 'elevated'
- hoverable: boolean
- clickable: boolean
- onClick?: () => void
- children: ReactNode
```

#### 7. MenuItem
**File**: `src/components/molecules/MenuItem/MenuItem.tsx`
```typescript
Combines: Icon + Text + Badge

Props:
- icon?: ReactNode
- label: string
- description?: string
- badge?: string | number
- active: boolean
- disabled: boolean
- onClick: () => void
```

#### 8. TabItem
**File**: `src/components/molecules/TabItem/TabItem.tsx`
```typescript
Combines: Icon + Text + Badge

Props:
- label: string
- icon?: ReactNode
- badge?: string | number
- active: boolean
- disabled: boolean
- onClick: () => void
```

#### 9. Breadcrumb
**File**: `src/components/molecules/Breadcrumb/Breadcrumb.tsx`
```typescript
Combines: Link + Icon (separator) + Text

Props:
- items: Array<{label, href?}>
- separator?: ReactNode
```

#### 10. Pagination
**File**: `src/components/molecules/Pagination/Pagination.tsx`
```typescript
Combines: Button + Text

Props:
- currentPage: number
- totalPages: number
- onPageChange: (page: number) => void
- showFirstLast: boolean
- maxVisible: number
```

---

### ORGANISMS (Complex UI Sections)

#### 1. Header
**File**: `src/components/organisms/Header/Header.tsx`
```typescript
Combines: Logo + Navigation + SearchBar + Avatar + Dropdown

Props:
- user?: {name, avatar, email}
- onSearch?: (query: string) => void
- onLogout: () => void
- showSearch: boolean
```

#### 2. Sidebar
**File**: `src/components/organisms/Sidebar/Sidebar.tsx`
```typescript
Combines: Logo + MenuItem[] + Divider + UserProfile

Props:
- items: NavigationItem[]
- activeItem: string
- onItemClick: (id: string) => void
- collapsed: boolean
- onToggleCollapse: () => void
- user?: UserInfo
```

#### 3. Navigation
**File**: `src/components/organisms/Navigation/Navigation.tsx`
```typescript
Combines: TabItem[] or MenuItem[]

Props:
- items: NavItem[]
- activeItem: string
- onItemClick: (id: string) => void
- orientation: 'horizontal' | 'vertical'
- variant: 'tabs' | 'pills' | 'underline'
```

#### 4. AuthForm
**File**: `src/components/organisms/AuthForm/AuthForm.tsx`
```typescript
Combines: Heading + FormField[] + Button + Link + Divider

Props:
- mode: 'signin' | 'signup'
- onSubmit: (data) => void
- loading: boolean
- error?: string
- onToggleMode: () => void
```

#### 5. ContentGrid
**File**: `src/components/organisms/ContentGrid/ContentGrid.tsx`
```typescript
Combines: Card[] + Spinner + EmptyState

Props:
- items: ContentItem[]
- loading: boolean
- emptyMessage: string
- columns: 1 | 2 | 3 | 4
- onCardClick: (id: string) => void
- renderCard: (item) => ReactNode
```

#### 6. FilterPanel
**File**: `src/components/organisms/FilterPanel/FilterPanel.tsx`
```typescript
Combines: Heading + Checkbox[] + Radio[] + Button

Props:
- filters: FilterConfig[]
- selectedFilters: Record<string, any>
- onFilterChange: (filters) => void
- onReset: () => void
- onApply: () => void
```

#### 7. Modal
**File**: `src/components/organisms/Modal/Modal.tsx`
```typescript
Combines: Portal + Backdrop + Card + Heading + Button

Props:
- open: boolean
- onClose: () => void
- title?: string
- size: 'sm' | 'md' | 'lg' | 'xl' | 'full'
- closeOnOverlay: boolean
- showCloseButton: boolean
- footer?: ReactNode
- children: ReactNode
```

#### 8. UserProfile
**File**: `src/components/organisms/UserProfile/UserProfile.tsx`
```typescript
Combines: Avatar + Text + Badge + Dropdown

Props:
- user: {name, email, avatar, role}
- status?: 'online' | 'offline' | 'away'
- actions: Array<{label, onClick}>
```

---

### TEMPLATES (Page Layouts)

#### 1. AuthLayout
**File**: `src/components/templates/AuthLayout/AuthLayout.tsx`
```typescript
Combines: Logo + Card + Background pattern

Props:
- children: ReactNode (AuthForm)
- backgroundVariant: 'gradient' | 'pattern' | 'solid'
```

#### 2. DashboardLayout
**File**: `src/components/templates/DashboardLayout/DashboardLayout.tsx`
```typescript
Combines: Header + Sidebar + Main content area

Props:
- children: ReactNode
- showSidebar: boolean
- sidebarCollapsed: boolean
```

#### 3. MainLayout
**File**: `src/components/templates/MainLayout/MainLayout.tsx`
```typescript
Combines: Header + Footer + Main content

Props:
- children: ReactNode
- header?: ReactNode
- footer?: ReactNode
```

---

## Component Standards

### File Structure (per component)
```
ComponentName/
├── ComponentName.tsx       # Main component
├── ComponentName.types.ts  # TypeScript interfaces
├── ComponentName.styles.ts # Tailwind variants (if needed)
├── ComponentName.test.tsx  # Unit tests
├── index.ts                # Exports
└── README.md               # Component documentation
```

### Example: Button Component Structure
```typescript
// Button.types.ts
export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  // ... other props
}

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// Button.tsx
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  // ... other props
}) => {
  // Implementation
};

// index.ts
export { Button } from './Button';
export type { ButtonProps, ButtonVariant, ButtonSize } from './Button.types';
```

### Component Guidelines

1. **Single Responsibility**: Each component does one thing well
2. **Composability**: Components can be combined to create more complex UI
3. **Prop Consistency**: Similar props across similar components
4. **Type Safety**: Full TypeScript coverage with interfaces
5. **Accessibility**: ARIA labels, keyboard navigation, focus management
6. **Documentation**: Each component has usage examples
7. **Testing**: Unit tests for all components
8. **Performance**: Memoization where appropriate (React.memo, useMemo, useCallback)

### Naming Conventions

- **Components**: PascalCase (Button, FormField, AuthLayout)
- **Props interfaces**: ComponentNameProps
- **Types/Enums**: PascalCase
- **Files**: Match component name
- **Hooks**: camelCase with 'use' prefix (useAuth, useToast)
- **Utilities**: camelCase (formatDate, validateEmail)
- **Constants**: UPPER_SNAKE_CASE (API_URL, MAX_FILE_SIZE)

### Import/Export Pattern

```typescript
// Atoms barrel export: src/components/atoms/index.ts
export * from './Button';
export * from './Input';
export * from './Label';
// ... etc

// Usage in other files
import { Button, Input, Label } from '@/components/atoms';
```

## Custom Hooks

```
src/hooks/
├── useAuth.ts          # Authentication state
├── useToast.ts         # Toast notifications
├── useModal.ts         # Modal state management
├── useForm.ts          # Form validation
├── useDebounce.ts      # Debounce values
├── useLocalStorage.ts  # LocalStorage sync
├── useMediaQuery.ts    # Responsive breakpoints
├── useClickOutside.ts  # Click outside detection
└── useFetch.ts         # API calls
```

## Utilities

```
src/utils/
├── validation/         # Form validation functions
├── formatting/         # Date, number, text formatting
├── classnames/         # Tailwind class merging
└── api/               # API helpers
```

## Type Definitions

```
src/types/
├── common.ts          # Shared types
├── user.ts            # User-related types
├── content.ts         # Content types
└── api.ts             # API response types
```

## Next Steps

1. Create the new directory structure
2. Migrate existing components to atomic structure
3. Build missing atomic components
4. Create molecules from atoms
5. Build organisms from molecules
6. Create page templates
7. Refactor pages to use templates and organisms
