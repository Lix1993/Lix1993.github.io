---
title: Snakemake
---

## 介绍
文档url: https://snakemake.readthedocs.io/    


## 教程
https://snakemake.readthedocs.io/


模块化：
```snakemake
include: "path/to/other.snakefile"
```

子流程：
```snakemake
subworkflow otherworkflow:
    workdir:
        "../path/to/otherworkflow"
    snakefile:
        "../path/to/otherworkflow/Snakefile"
    configfile:
        "path/to/custom_configfile.yaml"

rule a:
    input:
        otherworkflow("test.txt")
    output: ...
    shell:  ...
```