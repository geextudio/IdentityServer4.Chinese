---
title: 总揽
lang: zh-CN
---
# 总揽

大部分现代应用差不多是如下的样子:

![nosecurity](https://images2017.cnblogs.com/blog/585526/201707/585526-20170730210302068-1103356180.png)

所涉及主要的交互包括:

* Web 应用与浏览器之间通讯
* Web 应用与 web APIs 之间通讯(包括应用自身通讯和代表用户的操作)
* 基于浏览器的应用与 web APIs 之间通讯
* 原生应用与 web APIs 之间通讯
* 服务端应用与 web APIs 之间通讯
* 不同 web APIs 之间通讯(包括应用自身通讯和代表用户的操作)

每一层（前端、中间层及后端）都必须通过实现认证及授权功能对资源进行保护，这些通常运行在相同的用户存储上。

把这类基础的安全功能交给一个 security token (安全令牌) 服务, 可以减少在不同应用和端点上的重复开发.

重新组织一下这些应用以支持 security token 服务，体现在如下的架构和协议：

![securitycase](https://images2017.cnblogs.com/blog/585526/201707/585526-20170730210318005-958743848.png)

以上设计安全划分成两个部分:

## **身份认证**

当应用程序需要确认当前用户的身份时，需要使用身份认证功能. 通常这类应用程序管理着用户数据，并需要确保用户只能访问到其所有权限访问的数据. 最常见的例子是 web 应用程序，而原生或者用js开发的应用程序同样需要进行身份认证.

最常见的身份认证协议是 SAML2p、 WS-Federation 及 OpenID Connect，其中 SAML2p 最为流行和广泛部署.

以上三种协议中，OpenID Connect 协议是最新的，由于其对现代应用程序最有潜力，因而也是被认为最具前景的身份认证协议. 该协议一开始就是为移动应用场景设计的，所对于 API 访问方式被设计得十分友好.

## **API 访问控制**

应用程序有两个基础的方式来与 API 通讯：使用应用程序自己的身份，或者代理某个用户的身份. 有时，应用会把两种方式绑定在一起使用. 

OAuth2 协议被应用程序用来向 security token 服务请求 access token，借此来与 API 进行通讯. 由于身份认证与授权被统一化了，使得这种代理方式降低了客户端与 API 本身的复杂性.

## **OpenID Connect 与 OAuth 2.0 相得益彰**

OpenID Connect and OAuth 2.0 are very similar – in fact OpenID Connect is an extension on top of OAuth 2.0. The two fundamental security concerns, authentication and API access, are combined into a single protocol - often with a single round trip to the security token service.

We believe that the combination of OpenID Connect and OAuth 2.0 is the best approach to secure modern applications for the foreseeable future. IdentityServer4 is an implementation of these two protocols and is highly optimized to solve the typical security problems of today’s mobile, native and web applications.

## **IdentityServer4 如何从中相助**

IdentityServer is middleware that adds the spec compliant OpenID Connect and OAuth 2.0 endpoints to an arbitrary ASP.NET Core application.

Typically, you build (or re-use) an application that contains a login and logout page (and maybe consent - depending on your needs), and the IdentityServer middleware adds the necessary protocol heads to it, so that client applications can talk to it using those standard protocols.

![idshelp](https://images2017.cnblogs.com/blog/585526/201707/585526-20170730211443349-584041189.png)

The hosting application can be as complex as you want, but we typically recommend to keep the attack surface as small as possible by including authentication related UI only.