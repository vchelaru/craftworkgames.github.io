"use strict";(self.webpackChunkmonogame_extended_website=self.webpackChunkmonogame_extended_website||[]).push([[4813],{7713:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var s=n(1312),a=n(9022),i=n(4848);function r(e){const{metadata:t}=e,{previousPage:n,nextPage:r}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(a.A,{permalink:n,title:(0,i.jsx)(s.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,i.jsx)(a.A,{permalink:r,title:(0,i.jsx)(s.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},3892:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var s=n(7131),a=n(3981),i=n(4848);function r(e){let{items:t,component:n=a.A}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(s.i,{content:t,children:(0,i.jsx)(n,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},3069:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});n(6540);var s=n(4164),a=n(1312),i=n(5846),r=n(1213),o=n(7559),l=n(8774),c=n(6535),d=n(7713),g=n(1463),u=n(3892),p=n(996),m=n(1107),h=n(4848);function x(e){const t=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,a.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,a.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function j(e){let{tag:t}=e;const n=x(t);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r.be,{title:n,description:t.description}),(0,h.jsx)(g.A,{tag:"blog_tags_posts"})]})}function b(e){let{tag:t,items:n,sidebar:s,listMetadata:i}=e;const r=x(t);return(0,h.jsxs)(c.A,{sidebar:s,children:[t.unlisted&&(0,h.jsx)(p.A,{}),(0,h.jsxs)("header",{className:"margin-bottom--xl",children:[(0,h.jsx)(m.A,{as:"h1",children:r}),t.description&&(0,h.jsx)("p",{children:t.description}),(0,h.jsx)(l.A,{href:t.allTagsPath,children:(0,h.jsx)(a.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,h.jsx)(u.A,{items:n}),(0,h.jsx)(d.A,{metadata:i})]})}function A(e){return(0,h.jsxs)(r.e3,{className:(0,s.A)(o.G.wrapper.blogPages,o.G.page.blogTagPostListPage),children:[(0,h.jsx)(j,{...e}),(0,h.jsx)(b,{...e})]})}},996:(e,t,n)=>{n.d(t,{A:()=>p});n(6540);var s=n(4164),a=n(1312),i=n(5260),r=n(4848);function o(){return(0,r.jsx)(a.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(a.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(i.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(7559),g=n(7293);function u(e){let{className:t}=e;return(0,r.jsx)(g.A,{type:"caution",title:(0,r.jsx)(o,{}),className:(0,s.A)(t,d.G.common.unlistedBanner),children:(0,r.jsx)(l,{})})}function p(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(u,{...e})]})}},3981:(e,t,n)=>{n.d(t,{A:()=>d});n(6540);var s=n(7131),a=n(4651),i=n(2171),r=n(5293),o=n(4848);function l(){const{colorMode:e}=(0,r.G)();return(0,o.jsx)(i.A,{repo:"craftworkGames/MonoGame.Extended",repoId:"MDEwOlJlcG9zaXRvcnkzODYxNTEzOA==",category:"Announcements",categoryId:"DIC_kwDOAk04Ys4Cf8Un",mapping:"title",strict:"0",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:e,lang:"en",loading:"lazy",crossorigin:"anonymous",async:!0})}var c=n(2303);function d(e){const{metadata:t,isBlogPostPage:n}=(0,s.e)(),{frontMatter:i,slug:r,title:d}=((0,c.A)(),t),{enableComments:g}=i;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.A,{...e}),g&&n&&(0,o.jsx)(l,{})]})}}}]);