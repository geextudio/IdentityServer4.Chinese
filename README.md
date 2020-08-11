# IdentityServer4.Chinese
通过对 [Identity Server 4 英文文档](https://identityserver4.readthedocs.io/en/latest/) 中文翻译来学习这项技术以及相关知识点扩展.

## 文档构建
* [Vuepress](https://www.vuepress.cn)
* [Read The Doc 网站](https://readthedocs.org)

## Vuepress 环境
```bash
# 安装依赖
yarn

# 新建一个 markdown 文件
echo '# Hello Identity Server!' > docs/README.md

# 开始写作
npx vuepress dev docs
```

## Python 虚拟环境

* Windows

```bash
python -m venv ids4doc
.\ids4doc\Scripts\activate
```

* Linux \ Mac
    
```bash
python3 -m venv ids4doc
source ids4doc/bin/activate
```