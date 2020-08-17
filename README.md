# Identity Server 那些事儿
通过以下方式基本搞清楚 Identity Server 的那些事儿

* 对 [Identity Server 英文文档](https://identityserver4.readthedocs.io/en/latest/) 中文翻译来学习这项技术
* 整理总结相关知识点扩展

Note：不是简单的英翻中，原文档中一些特定意义英文名词将保留英文，否则可能会让读者看得莫名其妙.

## 文档构建
* [Vuepress](https://www.vuepress.cn)
* [Read The Doc 网站](https://readthedocs.org)
  * [Sphinx](https://docs.readthedocs.io/en/stable/intro/getting-started-with-sphinx.html)

## Vuepress 环境 (含[中英文](https://www.vuepress.cn/guide/i18n.html#%E7%AB%99%E7%82%B9%E5%A4%9A%E8%AF%AD%E8%A8%80%E9%85%8D%E7%BD%AE)切换)
```bash
# 安装依赖
yarn

# 新建一个 markdown 文件
echo '# Hello Identity Server!' > docs/README.md

# 开始写作
npx vuepress dev docs
```

> 部署到[Vercel](https://vercel.com/guides/deploying-vuepress-to-vercel) URL : https://ids-story.now.sh

## Python 虚拟环境

* Windows

```bash
python -m venv ids4doc.venv
.\ids4doc.venv\Scripts\activate
python -m pip install --upgrade pip 
pip install -r requirements.txt
```

* Linux \ Mac
    
```bash
python3 -m venv ids4doc.venv
source ids4doc.venv/bin/activate
python -m pip install --upgrade pip
pip install -r requirements.txt
```
