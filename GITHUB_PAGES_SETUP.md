# GitHub Pages Setup Instructions

## One-Time Setup (Required)

1. **Enable GitHub Pages in Repository Settings**
   - Go to: https://github.com/shahzada-shah/cat-adopt/settings/pages
   - Under "Build and deployment":
     - Source: Select "GitHub Actions"
   - Click "Save"

2. **Push Changes**
   ```bash
   git push origin main
   ```

3. **Monitor Deployment**
   - Go to: https://github.com/shahzada-shah/cat-adopt/actions
   - Watch the "Deploy to GitHub Pages" workflow run
   - First deployment takes ~2-3 minutes

4. **Access Your Site**
   - Once deployed, visit: https://shahzada-shah.github.io/cat-adopt/
   - The URL will also appear in the Actions workflow output

## What's Configured

✅ **Vite Config** (`vite.config.ts`)
   - Added `base: '/cat-adopt/'` for correct asset paths on GitHub Pages

✅ **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
   - Triggers on every push to main branch
   - Builds the project with `npm ci` and `npm run build`
   - Deploys to GitHub Pages automatically
   - Can also be triggered manually from Actions tab

✅ **Jekyll Bypass** (`public/.nojekyll`)
   - Prevents GitHub from trying to build with Jekyll
   - Ensures Vite build is served correctly

## Future Deployments

After setup, deployments are automatic:
1. Make changes to your code
2. Commit and push to main branch
3. GitHub Actions automatically builds and deploys
4. Site updates in 1-2 minutes

## Monitoring

- **Actions Tab**: https://github.com/shahzada-shah/cat-adopt/actions
- **Deployment Status**: Green checkmark = successful deployment
- **View Logs**: Click on any workflow run to see detailed logs
- **Failed Builds**: Will show error messages in the workflow logs

## Manual Deployment

To manually trigger a deployment:
1. Go to: https://github.com/shahzada-shah/cat-adopt/actions
2. Click "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button
4. Select "main" branch
5. Click "Run workflow"

