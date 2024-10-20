// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
var blogComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").pop()
    // Get just the filename without prefix
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  },
  structuredData: {
    type: "object",
    resolve: (doc) => ({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: doc.title,
      datePublished: doc.publishedAt,
      dateModified: doc.publishedAt,
      description: doc.summary,
      image: doc.image ? `http://localhost:3000${doc.image}` : `http://localhost:3000/og?title=${doc.title}`,
      url: `http://localhost:3000/blogs/${doc._raw.flattenedPath.split("/").pop()}`,
      author: {
        "@type": "Person",
        name: doc.author || "Unknown Author"
      }
    })
  }
};
var editorialComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").pop()
    // Get just the filename without prefix
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  },
  structuredData: {
    type: "object",
    resolve: (doc) => ({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: doc.title,
      datePublished: doc.publishedAt,
      dateModified: doc.publishedAt,
      description: doc.summary,
      image: doc.image ? `http://localhost:3000${doc.image}` : `http://localhost:3000/og?title=${doc.title}`,
      url: `http://localhost:3000/editorials/${doc._raw.flattenedPath.split("/").pop()}`,
      author: {
        "@type": "Person",
        name: doc.author || "Unknown Author"
      }
    })
  }
};
var reviewComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").pop()
    // Get just the filename without prefix
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  },
  structuredData: {
    type: "object",
    resolve: (doc) => ({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: doc.title,
      datePublished: doc.publishedAt,
      dateModified: doc.publishedAt,
      description: doc.summary,
      image: doc.image ? `http://localhost:3000${doc.image}` : `http://localhost:3000/og?title=${doc.title}`,
      url: `http://localhost:3000/reviews/${doc._raw.flattenedPath.split("/").pop()}`,
      author: {
        "@type": "Person",
        name: doc.author || "Unknown Author"
      }
    })
  }
};
var quizComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").pop()
    // Get just the filename without prefix
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  },
  structuredData: {
    type: "object",
    resolve: (doc) => ({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: doc.title,
      datePublished: doc.publishedAt,
      dateModified: doc.publishedAt,
      description: doc.summary,
      image: doc.image ? `http://localhost:3000${doc.image}` : `http://localhost:3000/og?title=${doc.title}`,
      url: `http://localhost:3000/quizes/${doc._raw.flattenedPath.split("/").pop()}`,
      author: {
        "@type": "Person",
        name: doc.author || "Unknown Author"
      }
    })
  }
};
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blogs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    publishedAt: {
      type: "date",
      required: true
    },
    summary: {
      type: "string",
      required: true
    },
    image: {
      type: "string"
    },
    category: {
      type: "string"
    },
    author: {
      type: "string",
      required: false
    }
  },
  computedFields: blogComputedFields
}));
var Editorial = defineDocumentType(() => ({
  name: "Editorial",
  filePathPattern: `editorials/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    publishedAt: {
      type: "date",
      required: true
    },
    summary: {
      type: "string",
      required: true
    },
    image: {
      type: "string"
    },
    category: {
      type: "string"
    },
    author: {
      type: "string",
      required: false
    }
  },
  computedFields: editorialComputedFields
}));
var Review = defineDocumentType(() => ({
  name: "Review",
  filePathPattern: `reviews/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    publishedAt: {
      type: "date",
      required: true
    },
    summary: {
      type: "string",
      required: true
    },
    image: {
      type: "string"
    },
    category: {
      type: "string"
    },
    author: {
      type: "string",
      required: false
    }
  },
  computedFields: reviewComputedFields
}));
var Quiz = defineDocumentType(() => ({
  name: "Quiz",
  filePathPattern: `quizes/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    publishedAt: {
      type: "date",
      required: true
    },
    summary: {
      type: "string",
      required: true
    },
    image: {
      type: "string"
    },
    category: {
      type: "string"
    },
    author: {
      type: "string",
      required: false
    }
  },
  computedFields: quizComputedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "src",
  documentTypes: [Blog, Editorial, Review, Quiz],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section"
          }
        }
      ]
    ]
  }
});
export {
  Blog,
  Editorial,
  Quiz,
  Review,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-54PWEZQB.mjs.map
