/* Deep-ICD's research output, shared by the homepage (which features the four
   most recent journal articles) and the full list at /publications.

   Titles, venues and links follow the layout reference, with one correction:
   the 2024 adult congenital heart disease paper appeared in the Indian Pacing
   and Electrophysiology Journal (PMID 38871179), not Annals of Noninvasive
   Electrocardiology as the reference had it.

   Author lists were taken from primary records -- PubMed E-utilities, Crossref
   by DOI, and the arXiv API -- in October 2026, and are given in Vancouver
   style. Capitalisation of ElRefai is normalised (some records give
   "Elrefai"). The EP Europace "special patient populations" abstract uses its
   journal record (8 authors); the Southampton ePrints entry lists only the
   university's own 4. The current manuscript has no public record yet, so it
   carries no author list. */

export type Publication = {
  meta: string;
  title: string;
  authors?: string[];
  href?: string;
  linkLabel?: string;
  summary?: string;
};

export type PublicationGroup = {
  heading: string;
  items: Publication[];
};

export const publicationGroups: PublicationGroup[] = [
  {
    heading: "Journal articles",
    items: [
      {
        meta: "2024 · Clinical study · Indian Pacing and Electrophysiology Journal",
        title:
          "Using artificial intelligence and deep learning to optimise the selection of adult congenital heart disease patients in S-ICD screening",
        authors: [
          "ElRefai M",
          "Abouelasaad M",
          "Conibear I",
          "Wiles BM",
          "Dunn AJ",
          "Coniglio S",
          "Zemkoho AB",
          "Morgan J",
          "Roberts PR",
        ],
        href: "https://pubmed.ncbi.nlm.nih.gov/38871179/",
        linkLabel: "Read publication",
      },
      {
        meta: "2023 · Methods · Annals of Operations Research",
        title:
          "Deep learning and hyperparameter optimization for assessing one’s eligibility for a subcutaneous implantable cardioverter-defibrillator",
        authors: [
          "Dunn AJ",
          "Coniglio S",
          "ElRefai M",
          "Roberts PR",
          "Wiles BM",
          "Zemkoho AB",
        ],
        href: "https://link.springer.com/article/10.1007/s10479-023-05326-1",
        linkLabel: "Read publication",
      },
      {
        meta: "2023 · Clinical study · Annals of Noninvasive Electrocardiology",
        title: "Correlation analysis of deep learning methods in S-ICD screening",
        authors: [
          "ElRefai M",
          "Abouelasaad M",
          "Wiles BM",
          "Dunn AJ",
          "Coniglio S",
          "Zemkoho AB",
          "Morgan J",
          "Roberts PR",
        ],
        href: "https://pubmed.ncbi.nlm.nih.gov/36920649/",
        linkLabel: "Read publication",
      },
      {
        meta: "2023 · Clinical study · Annals of Noninvasive Electrocardiology",
        title:
          "Role of deep learning methods in screening for subcutaneous implantable cardioverter defibrillator in heart failure",
        authors: [
          "ElRefai M",
          "Abouelasaad M",
          "Wiles BM",
          "Dunn AJ",
          "Coniglio S",
          "Zemkoho AB",
          "Morgan JM",
          "Roberts PR",
        ],
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9833355/",
        linkLabel: "Read publication",
      },
      {
        meta: "Published online 2022 · Journal issue 2025 · Journal of Interventional Cardiac Electrophysiology",
        title:
          "Deep learning-based insights on T:R ratio behaviour during prolonged screening for S-ICD eligibility",
        authors: [
          "ElRefai M",
          "Abouelasaad M",
          "Wiles BM",
          "Dunn AJ",
          "Coniglio S",
          "Zemkoho AB",
          "Roberts PR",
        ],
        href: "https://link.springer.com/article/10.1007/s10840-022-01245-6",
        linkLabel: "Read publication",
      },
      {
        meta: "2021 · Foundational methods · Artificial Intelligence in Medicine",
        title:
          "Deep learning methods for screening patients’ S-ICD implantation eligibility",
        authors: [
          "Dunn AJ",
          "ElRefai MH",
          "Roberts PR",
          "Coniglio S",
          "Wiles BM",
          "Zemkoho AB",
        ],
        href: "https://arxiv.org/abs/2103.06021",
        linkLabel: "Read manuscript",
      },
    ],
  },
  {
    heading: "Conference abstracts",
    items: [
      {
        meta: "2025 · Heart Rhythm",
        title:
          "Deep learning based assessment of T:R ratios during prolonged screening in S-ICD patients experienced inappropriate shocks secondary to T-wave over-sensing",
        authors: [
          "Toon LT",
          "ElRefai M",
          "Abouelasaad M",
          "Wiles B",
          "Ward S",
          "Dunn A",
          "Zemkoho A",
          "Roberts P",
          "Paisey J",
        ],
        href: "https://doi.org/10.1016/j.hrthm.2025.03.1745",
        linkLabel: "Read abstract",
      },
      {
        meta: "2025 · Heart",
        title:
          "Analysis of P:R ratios over a 24-hour period: using a convoluted neural network machine learning artificial intelligence tool",
        authors: [
          "Toon LT",
          "ElRefai M",
          "Wiles BM",
          "Ward S",
          "Dunn AJ",
          "Zemkoho AB",
          "Roberts PR",
          "Paisey JR",
        ],
        href: "https://heart.bmj.com/content/111/Suppl_3/A143.2.abstract",
        linkLabel: "Read abstract",
      },
      {
        meta: "2022 · EP Europace",
        title:
          "The use of artificial intelligence and deep learning methods in subcutaneous implantable cardioverter defibrillator screening to optimise selection in special patient populations",
        authors: [
          "ElRefai M",
          "Abouelasaad M",
          "Conibear I",
          "Wiles B",
          "Dunn A",
          "Coniglio S",
          "Zemkoho A",
          "Roberts P",
        ],
        href: "https://doi.org/10.1093/europace/euac053.448",
        linkLabel: "Read abstract",
      },
      {
        meta: "2022 · EP Europace",
        title:
          "Eligibility for subcutaneous implantable cardiac defibrillator utilising artificial intelligence and deep learning methods for prolonged screening: where is the cut-off?",
        authors: [
          "ElRefai M",
          "Abouelasaad M",
          "Dunn A",
          "Coniglio S",
          "Zemkoho A",
          "Wiles B",
          "Roberts P",
        ],
        href: "https://academic.oup.com/europace/article/24/Supplement_1/euac053.447/",
        linkLabel: "Read abstract",
      },
    ],
  },
  {
    heading: "Current manuscript",
    items: [
      {
        meta: "Author-supplied draft · Public link to be added when available",
        title:
          "Deep learning for non-transvenous ICD screening: tailored neural network architectures, extended experiments, and explainability",
        summary:
          "Extends the research to extravascular devices and updated screening methods.",
      },
    ],
  },
];

/* The homepage shows peer-reviewed full papers rather than the newest items
   overall: two of the newest are conference abstracts. Journal articles are
   already listed newest first. */
export const featuredPublications = publicationGroups[0].items.slice(0, 4);

export const totalPublications = publicationGroups.reduce(
  (n, group) => n + group.items.length,
  0,
);
