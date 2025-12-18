# Sanity CMS Upgrade Plan: v3.94 → v5.0.1

## Overview

Upgrade from Sanity v3.94 to v5.0.1, which requires React 19.2+. This is a gradual, safety-first approach with progressive commits.

**Current versions:**
- sanity: 3.94.0 → 5.0.1
- @sanity/vision: 3.94.0 → 5.0.1
- @sanity/cli: 3.95.0 → 5.0.1
- react: 18.2.0 → 19.2.3
- react-dom: 18.2.0 → 19.2.3
- sanity-plugin-media: 3.0.3 → 4.1.1

**Good news:** Your codebase is already fully modernized to v3 syntax (defineType, defineField, StructureBuilder). No schema refactoring needed.

## Phase 1: React 18.3 Pre-Migration

**Goal:** Identify deprecation warnings before React 19.

### Commit 1.1: Upgrade to React 18.3
- Update `react` and `react-dom` to 18.3.1 (identical to 18.2 but with deprecation warnings)
- Run dev server and check console for warnings
- **Files:** package.json

### Commit 1.2: Fix React 18.3 Warnings (if any)
- Address any deprecation warnings found
- Test Sanity Studio locally
- **Files:** TBD based on warnings

## Phase 2: React 19 Migration

**Goal:** Upgrade React to meet Sanity v5 requirements.

### Commit 2.1: Update React Dependencies
- Update `react` to 19.2.3 and `react-dom` to 19.2.3
- Update `@types/react` and `@types/react-dom` if present
- **Files:** package.json

### Commit 2.2: Verify React 19 Compatibility
- Run `npm run dev` and test Studio functionality
- Test all custom components:
  - deskStructure.tsx - custom preview panes
  - schemas/components/icons.tsx - SVG components
  - schemas/project/utilities.ts - validation functions
- Verify no ref-related issues in custom code
- **Testing checklist:**
  - Studio loads without errors
  - Desk structure renders correctly
  - Document editing works (articles, projects, pages)
  - Media plugin functional
  - Preview panes work
  - Vision tool accessible (admin only)

## Phase 3: Sanity v4 Transition (Optional Safety Step)

**Goal:** Incremental version bump before v5 (v4 has no breaking changes from v3).

### Commit 3.1: Upgrade to Sanity v4
- Update `sanity`, `@sanity/vision`, `@sanity/cli` to latest v4
- **Files:** package.json

### Commit 3.2: Test Sanity v4
- Run `npm run dev`
- Test Studio functionality
- Run `npm run build` to verify production build

## Phase 4: Sanity v5 Upgrade

**Goal:** Upgrade to Sanity v5 with React 19 support.

### Commit 4.1: Update Sanity Core Packages
- Update `sanity` to 5.0.1
- Update `@sanity/vision` to 5.0.1
- Update `@sanity/cli` to 5.0.1
- **Files:** package.json

### Commit 4.2: Update Sanity Plugins
- Update `sanity-plugin-media` to 4.1.1 (v5 compatible)
- Check `sanity-plugin-prefixed-slug` compatibility (currently 2.0.0)
- **Files:** package.json

### Commit 4.3: Verify Sanity v5 Studio
- Run `npm run dev`
- Test all document types (articles, projects, pages, authors, toys)
- Test all settings (site, navigation, colors)
- Test category creation/editing
- Verify custom desk structure
- Test media library
- Test preview functionality
- **Critical files to verify:**
  - sanity.config.ts
  - sanity.cli.ts
  - deskStructure.tsx
  - All schema files in schemas/

## Phase 5: Final Verification

### Commit 5.1: Production Build Test
- Run `npm run build`
- Verify no build errors
- Check bundle size (should be comparable or smaller)
- **Commands:**
  - `npm run build`
  - `npm run type-check`
  - `npm run lint`

### Commit 5.2: Deploy to Sanity Hosting (Optional)
- Run `npm run deploy`
- Test deployed Studio
- Verify all functionality in production

## Rollback Strategy

If issues occur at any phase:
1. `git revert HEAD` - undo last commit
2. `npm install` - restore previous versions
3. Document the issue before retrying

## Critical Files to Monitor

**Configuration:**
- sanity.config.ts - Studio configuration
- sanity.cli.ts - CLI configuration
- deskStructure.tsx - Custom desk structure

**Schemas (23 files total):**
- schemas/domains/ - 7 document types
- schemas/components/ - 7 object types including icons
- schemas/categories/ - 11 category types
- schemas/settings/ - 3 singleton settings

**Custom Code:**
- plugins/codeInputConfig.ts - Elixir language support

## Expected Outcomes

- ✅ Zero schema changes required (already v3 compliant)
- ✅ No API changes to Studio configuration
- ✅ React 19 performance improvements
- ✅ Continued compatibility with existing plugins
- ⚠️ May need to update `sanity-plugin-prefixed-slug` if incompatible

## React 19 Key Changes

### Breaking Changes
- **Removed APIs:** ReactDOM.render (use createRoot), ReactDOM.hydrate (use hydrateRoot)
- **String refs removed:** Use callback refs or createRef
- **createFactory removed:** Use JSX instead
- **react-test-renderer/shallow removed:** Migrate to @testing-library/react
- **UMD builds removed:** Use ESM-based CDNs like esm.sh

### Improvements
- forwardRef no longer needed (ref is a prop)
- Better error handling with window.reportError
- Performance optimizations
- TypeScript type improvements

## Sanity v5 Key Changes

### Breaking Changes
- **React 19.2+ required:** Only breaking change from v4
- **TypeGen output changes:** Update generated types if using TypeGen

### What Stays the Same
- All schema APIs (defineType, defineField)
- StructureBuilder API
- Plugin system
- Studio configuration
- GROQ queries
- Content Lake compatibility

## Resources

- [Sanity Studio v5 Blog Post](https://www.sanity.io/blog/sanity-studio-v5)
- [React 19 Upgrade Guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide)
- [Sanity Changelog](https://www.sanity.io/docs/changelog)
- [GitHub Releases](https://github.com/sanity-io/sanity/releases)
- [React 18 to 19 Migration Guide](https://docs.codemod.com/guides/migrations/react-18-19)

## Progress Tracking

- [ ] Phase 1: React 18.3 Pre-Migration
  - [ ] Commit 1.1: Upgrade to React 18.3
  - [ ] Commit 1.2: Fix warnings (if any)
- [ ] Phase 2: React 19 Migration
  - [ ] Commit 2.1: Update React dependencies
  - [ ] Commit 2.2: Verify compatibility
- [ ] Phase 3: Sanity v4 Transition
  - [ ] Commit 3.1: Upgrade to Sanity v4
  - [ ] Commit 3.2: Test v4
- [ ] Phase 4: Sanity v5 Upgrade
  - [ ] Commit 4.1: Update core packages
  - [ ] Commit 4.2: Update plugins
  - [ ] Commit 4.3: Verify v5 Studio
- [ ] Phase 5: Final Verification
  - [ ] Commit 5.1: Production build test
  - [ ] Commit 5.2: Deploy (optional)

## Estimated Timeline

**Gradual approach:** 8-10 commits across 5 phases

**Time investment:** Testing at each phase is critical - allocate time for thorough verification at each checkpoint.
