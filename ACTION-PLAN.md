# Prioritized SEO Action Plan: plombierurgence.be

- URL: `https://www.plombierurgence.be`
- Overall score: `82/100`

## Critical Priority (Fix Immediately)

1. **Implement `LocalBusiness` / `Organization` Schema**
   - **Area**: Entity SEO / Schema
   - **Evidence**: Script detected no Organization entity in JSON-LD.
   - **Impact**: Google cannot explicitly connect the brand to its local coordinates, reviews, and entity identity.
   - **Fix**: Deploy `LocalBusiness` JSON-LD schema on the homepage containing `name`, `url`, `telephone`, `priceRange`, `areaServed`, and `sameAs` links (social media, professional directories).

2. **Audit and Consolidate Programmatic Location Pages**
   - **Area**: Content Quality
   - **Evidence**: 70+ communes covered with 62 potential orphan pages.
   - **Impact**: Exceeds the 50+ page hard-stop rule for local service businesses. High risk of "Crawled - currently not indexed" or thin content penalties.
   - **Fix**: Consolidate low-traffic communes into regional hub pages (e.g., "Plombier Brabant Wallon") or ensure every single of the 70 pages has >500 words of highly unique, non-templated content.

## High Priority (Fix Within 1 Week)

3. **Resolve Internal Link Architecture (Orphan Pages)**
   - **Area**: Technical SEO
   - **Evidence**: 62 potential orphan pages detected.
   - **Impact**: Pages will not rank or be indexed efficiently if they lack internal link equity.
   - **Fix**: Implement a dynamic "Communes voisines" (Nearby areas) internal linking module on location pages to weave them together.

4. **Add `ProfilePage` Schema for Technicians**
   - **Area**: E-E-A-T
   - **Evidence**: Team section exists (Marc D., Julien V.) but lacks structured data.
   - **Impact**: Missed opportunity to establish human expertise in Google's Knowledge Graph.
   - **Fix**: Add `ProfilePage` schema for each expert, linking their certifications (Cerga/Cedicol).

## Medium Priority (Fix Within 1 Month)

5. **Repair Broken Links and Redirect Chains**
   - **Area**: Technical SEO
   - **Evidence**: 2 broken links and 1 redirect chain found.
   - **Impact**: Leaks link equity and damages user experience during emergencies.
   - **Fix**: Update the exact URLs in the navigation/footer to point directly to 200 OK status pages.

6. **Verify Core Web Vitals (INP/LCP)**
   - **Area**: Performance
   - **Evidence**: API limit reached during automated audit.
   - **Impact**: Mobile performance directly affects local rankings.
   - **Fix**: Run a manual Lighthouse or PageSpeed Insights test. Ensure Interaction to Next Paint (INP) is under 200ms.

## Low Priority (Backlog)

7. **Optimize Social Meta Images**
   - **Area**: On-Page SEO
   - **Evidence**: `og:image:width` and `og:image:height` missing.
   - **Fix**: Define dimensions (1200x630) to ensure social platforms don't crop emergency visual assets.
