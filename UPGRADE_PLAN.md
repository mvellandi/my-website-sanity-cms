# Sanity v2 to v3 Upgrade Plan

## Current State
- Sanity: v2.36.6
- @sanity/vision: v2.2.6
- @sanity/structure: v2.36.2
- React: v18.2.0

## Target State
- Sanity: v3.94.0
- @sanity/vision: v3.94.0
- React: v18.2.0 (already compatible)

## Major Breaking Changes

### 1. Configuration Changes
- `sanity.config.js` structure has changed
- New plugin system
- Different import patterns

### 2. Plugin Updates
- `sanity-plugin-media` may need updates
- `sanity-plugin-prefixed-slug` may need updates
- Some plugins may be deprecated

### 3. Schema Changes
- Some schema field types may have changed
- New validation patterns

## Upgrade Steps

### Step 1: Backup Current State
```bash
git add .
git commit -m "Backup before Sanity v3 upgrade"
```

### Step 2: Update Dependencies
```bash
npm install sanity@latest @sanity/vision@latest
```

### Step 3: Update Configuration Files
- Update `sanity.config.js` to v3 format
- Update `sanity.cli.js` if needed
- Check plugin compatibility

### Step 4: Update Schemas
- Review and update schema files
- Check for deprecated field types
- Update validation rules

### Step 5: Test and Fix
- Run the development server
- Check for console errors
- Fix any breaking changes

### Step 6: Update Custom Components
- Review custom React components
- Update any deprecated APIs
- Test functionality

## Risk Assessment
- **High Risk**: Major version upgrade with breaking changes
- **Medium Risk**: Plugin compatibility issues
- **Low Risk**: Schema field type changes

## Rollback Plan
- Keep the current branch as backup
- Can revert to v2 if issues arise
- Test thoroughly before deploying 