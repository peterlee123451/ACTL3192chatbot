# Vercel Environment Variables Configuration

Use these environment variables when setting up your project in Vercel:

## Required Environment Variables

```
OPENAI_API_KEY=your_openai_api_key_here
NEXT_PUBLIC_CHATKIT_WORKFLOW_ID=wf_your_workflow_id_here
NEXT_PUBLIC_CHATKIT_DOMAIN_KEY=domain_pk_690d602a7038819094d42fc7e45c64bc047c13396cb7058f
```

## Optional Environment Variables

```
CHATKIT_API_BASE=https://api.openai.com
```

## Quick Setup Instructions

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add each variable above:
   - **OPENAI_API_KEY**: Your OpenAI API key (created in the same org & project as your Agent Builder)
   - **NEXT_PUBLIC_CHATKIT_WORKFLOW_ID**: Your workflow ID from Agent Builder (starts with `wf_...`)
   - **NEXT_PUBLIC_CHATKIT_DOMAIN_KEY**: `domain_pk_690d602a7038819094d42fc7e45c64bc047c13396cb7058f`
   - **CHATKIT_API_BASE** (optional): Default is `https://api.openai.com`

4. Make sure to apply these to all environments (Production, Preview, Development)

## Domain Key

Your domain key is: `domain_pk_690d602a7038819094d42fc7e45c64bc047c13396cb7058f`

This key is used to authenticate your domain with ChatKit and should be set as `NEXT_PUBLIC_CHATKIT_DOMAIN_KEY` in Vercel.

