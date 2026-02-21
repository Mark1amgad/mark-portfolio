
## About Me Section

A new section placed between the Hero and University Projects, featuring your profile photo, a brief bio, and quick links to LinkedIn, GitHub, and resume download.

### Layout

- **Desktop**: Two-column layout -- profile photo on the left, bio text and links on the right
- **Right column**: Short bio paragraph, skill highlights, and a row of action buttons (LinkedIn, GitHub, Download Resume)
- **Mobile**: Stacks vertically -- photo on top, text below

### What will be created

1. **New file: `src/components/AboutSection.tsx`**
   - Profile photo displayed in a rounded container with a subtle border glow
   - Bio paragraph summarizing your background as an AI Engineering student
   - Three action buttons: LinkedIn, GitHub, and Download Resume (PDF)
   - Scroll-triggered fade-in animations using Framer Motion (matching existing style)

2. **Upload handling**
   - Your profile photo will be saved to `src/assets/profile-photo.*`
   - Your resume PDF will be saved to `public/files/resume.pdf` (for direct download)

3. **Updated file: `src/pages/Index.tsx`**
   - Import and place `<AboutSection />` between `<Hero />` and the first `<ProjectsSection />`

4. **Updated file: `src/components/Navigation.tsx`**
   - Add an "About" link in both desktop and mobile navigation menus that scrolls to the new section

### Design Details

- Follows the existing dark theme with `bg-secondary/30` background (similar to the Contact section)
- Uses the same animation patterns (Framer Motion `whileInView`) as other sections
- Profile photo: circular with a primary-color ring/glow effect
- Buttons styled consistently with the existing portfolio design

### Waiting on

- **Your profile photo** -- upload it in the chat
- **Your resume/CV PDF** -- upload it in the chat

Once you upload both files, I'll implement everything.
