# website
The website for [Datagrove Costa Rica](https://datagrovecr.com/) was created using VitePress.

To install locally:
```
git clone https://github.com/datagrovecr/website.git
npm install
```

To run locally:
```
npm run docs:dev
```

To build for production:
```
npm run docs:build
```

To deploy:
The Datagrove Costa Rica website is hosted by Cloudflare, and any updates to the datagrovecr repo will deploy those updates to the website itself.
```
git add .
git commit -m "<insert message describing changes>"
git push
```
