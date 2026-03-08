# Portfolio Setup Guide for Jerico Ibanez

## 🚀 Quick Start

### 1. Install Dependencies

```bash
pnpm install
# or
npm install
```

### 2. Placeholder Images Needed

Create or replace these images in the `/public` directory:

#### Avatar Images (Required)
- `/public/avatar/me-light.jpg` - Your photo for light mode
- `/public/avatar/me-dark.jpg` - Your photo for dark mode (can be same image)

#### Work Experience Logos
- `/public/work-experience/optrizo.png`
- `/public/work-experience/hakum.png`
- `/public/work-experience/solesurgeon.png`
- `/public/work-experience/startek.png`
- `/public/work-experience/converge.png`

#### Education Logo
- `/public/education/dlsu.png` - De La Salle University logo

#### Skills Category Icons (Generic icons work fine)
- `/public/skills/frontend.png`
- `/public/skills/backend.png`
- `/public/skills/frameworks-libraries.png`
- `/public/skills/cloud-deployment.png`
- `/public/skills/ai-tools.png`
- `/public/skills/development-tools.png`
- `/public/skills/design-cms.png`

#### Project Screenshots
- `/public/projects/hakum.png`
- `/public/projects/meridian.png`
- `/public/projects/investph.png`
- `/public/projects/rtd.png`
- `/public/projects/solesurgeon.png`

#### Certifications
- `/public/certifications/airtable.png`
- `/public/certifications/aws.png`
- `/public/certifications/klaviyo.png`
- `/public/certifications/hubspot.png`
- `/public/certifications/sixsigma.png`
- `/public/certifications/databricks.png`
- `/public/certifications/asana.png`
- `/public/certifications/cisco.png`

#### Hackathons
- `/public/hackathons/dlsu.png`

#### Resume PDF
- `/public/resume.pdf` - Your resume PDF file

### 3. Run Development Server

```bash
pnpm dev
# or
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📝 What's Been Updated

✅ All personal information updated to Jerico Ibanez
✅ Work experience updated with Optrizo, Hakum, Digiteer, Nexvision, Capstone Project
✅ Education updated to DLSU
✅ Skills updated with your tech stack
✅ Projects updated with your portfolio links
✅ Certifications added (8 certifications)
✅ Contact information updated
✅ AI Chat temporarily disabled (no API keys needed)

## 🎨 Customization Tips

### Colors
Edit `src/app/globals.css` to change the color scheme (lines 3-35)

### Content
All content is in `src/data/resume.tsx` - easy to update!

### Social Links
Update GitHub, LinkedIn, X (Twitter) URLs in `src/data/resume.tsx` (lines 78-105)

## 🔧 Optional: Enable AI Chat Later

When ready to enable the AI chatbot:

1. Get API keys:
   - Groq API: https://console.groq.com
   - Mem0 API: https://mem0.ai

2. Create `.env.local`:
```
GROQ_API_KEY=your_groq_api_key
MEM0_API_KEY=your_mem0_api_key
```

3. Uncomment chat feature in `src/components/navbar.tsx` (lines 92-113)

## 📦 Build for Production

```bash
pnpm build
# or
npm run build
```

## 🚀 Deploy to Vercel

1. Push to GitHub
2. Import project in Vercel
3. Deploy!

## 📸 Image Recommendations

- **Avatar**: 400x400px, PNG or JPG
- **Company Logos**: 200x200px, PNG with transparent background
- **Project Screenshots**: 1200x630px (or 16:9 ratio), PNG or JPG
- **Certifications**: 800x600px, PNG or JPG

## 🆘 Need Help?

- Images not showing? Check file paths and names match exactly
- Build errors? Run `pnpm install` again
- Port 3000 busy? Use `pnpm dev -p 3001`

---

**Note**: The AI chat feature is commented out. The portfolio will work perfectly without it!
