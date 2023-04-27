---
pageClass: home-page
# some data for the components

name: 李星
profile: /profile.jpg

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/Lix1993

cv: 
bio: 生物数据 at DeepbioGroup
email: lix930701@gmail.com
---

<ProfileSection :frontmatter="$page.frontmatter" />

## About Me

目前在 [DeepbioGroup](https://www.deepbiogroup.com/) 做生物数据。



## 工作经历
- **Deepbio** <br/>
2021.07 - Now   生物数据分析      
整理生物实验使用的产品的特有属性    
整理Pubmed文献信息和文章内容，识别使用产品

- **生工生物工程(上海)股份有限公司** <br/>
2020.03 - 2021.07   生信工程师    
rnaseq（mRNA、lncRNA、circRNA、单细胞RNAseq）相关分析流程开发，维护

- **康码（上海）生物科技有限公司** <br/>
2019.07 - 2020.03   生信工程师    
DNA序列优化工具开发，基于物种密码子使用频率和GC含量等特征预测高表达蛋白的DNA序列
- **康普森生物** <br/>
2018.05-2019.07   生信工程师    
SNP芯片基因分型    
动植物重测序数据分析， 数据质控/比对/variant call / 群体遗传学分析，snpylo，admixture

## 教育经历

- **中国农业大学** <br/>
2016.09-2018.06   生物物理学 硕士 理学院
- **江南大学** <br/>
2011.09-2015.06   生物工程 本科 生物工程学院
## 项目介绍



<ProjectCard hideBorder=true>

  **蛋白结晶条件预测**

  利用PDB数据库进行蛋白结晶条件预测

</ProjectCard>

<ProjectCard hideBorder=true>

  **整理生物实验使用的产品的特有属性**
  
  整理生物实验使用的产品的特有属性

  [[Link](https://www.deepbiogroup.com/product)]

</ProjectCard>


[→ Full list](/projects/)

<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 14px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>
