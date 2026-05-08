# Arpit's Exam Tracker Website

## Quick Start
1. Place all tracker HTML files in the `trackers/` folder
2. Run: `npx http-server -p 8080 --cors` (or `npx live-server`)
3. Open: **http://localhost:8080**

> ⚠️ Always use the local server URL — do NOT open HTML files directly from the file system (`file://` URLs).

## Folder Structure
```
arpit-tracker/
├── index.html                        ← Dashboard homepage
├── tracker-quant.html                ← Quant (41 ch)
├── tracker-reasoning.html            ← Reasoning (44 ch)
├── tracker-coding.html               ← NQT Coding (16 topics)
├── tracker-english.html              ← English (26 ch)
├── tracker-gk.html                   ← GK (23 ch)
├── assets/
│   ├── style.css                     ← Design system
│   ├── nav.js                        ← Sidebar + mobile tabs + theme injection
│   └── dashboard.js                  ← Dashboard stats, donut ring, focus logic
└── trackers/
    ├── arpit_quant_tracker.html
    ├── arpit_reasoning_tracker.html
    ├── arpit_nqt_coding_final.html
    ├── arpit_english_tracker.html
    └── arpit_gk_tracker__1_.html
```

## Tracker Files in /trackers/
| File | Subject | Chapters |
|---|---|---|
| `arpit_quant_tracker.html` | Quantitative Aptitude | 41 |
| `arpit_reasoning_tracker.html` | Logical Reasoning | 44 |
| `arpit_nqt_coding_final.html` | NQT Coding | 16 |
| `arpit_english_tracker.html` | English | 26 |
| `arpit_gk_tracker__1_.html` | General Knowledge | 23 |

## Storage Keys (localStorage)
| Subject | Keys | Total |
|---|---|---|
| Quant | `qt3_1` to `qt3_41` | 41 |
| Reasoning | `rs3_1` to `rs3_44` | 44 |
| NQT Coding | `cdf_1` to `cdf_16` | 16 |
| English | `en_1` to `en_26` | 26 |
| GK | `gk_1` to `gk_23` | 23 |

Progress saves automatically in browser localStorage. Do not clear browser data unless you want to reset progress.

## Exam Dates
- **TCS NQT**: August 1, 2025
- **SSC CGL**: After NQT (Sep 2025+)

## Chapter Breakdown
| Subject | Phase 1 (NQT) | Phase 2 (SSC) | Total |
|---|---|---|---|
| Quant | 27 | 14 | 41 |
| Reasoning | 23 | 21 | 44 |
| Coding | 16 | 0 | 16 |
| English | 25 | 1 | 26 |
| GK | 12 | 11 | 23 |
| **Total** | **103** | **47** | **150** |
