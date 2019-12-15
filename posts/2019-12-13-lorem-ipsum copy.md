---
date: 2019-12-14 05:54:23
title: TESTE
description: teste
category: Js
background: "#7159c1"
---

```jsx
<Layout>
  <SEO title="Home" />
  {postList.map(
    ({
      node: {
        frontmatter: { background, category, date, description, title },
        timeToRead,
        fields: { slug },
      },
    }) => (
      <PostItem
        slug={slug}
        background={background}
        category={category}
        date={date}
        timeToRead={timeToRead}
        title={title}
        description={description}
      />
    )
  )}

  <Pagination
    isFirst={isFirst}
    isLast={isLast}
    currentPage={currentPage}
    numPages={numPages}
    prevPage={prevPage}
    nextPage={nextPage}
  />
</Layout>
```

![desert](/assets/img/desert.jpg)

> Proin tempor erat purus.

Cras in euismod erat, nec dapibus nisi.
