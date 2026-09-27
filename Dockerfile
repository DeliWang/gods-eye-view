FROM node:24-slim

WORKDIR /app

COPY package.json package-lock.json ./
ENV PUPPETEER_SKIP_DOWNLOAD=true
RUN npm ci --ignore-scripts --no-audit --no-fund --registry=https://registry.npmmirror.com

COPY . .

ENV HOST=0.0.0.0
ENV PORT=4173

EXPOSE 4173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "4173"]
