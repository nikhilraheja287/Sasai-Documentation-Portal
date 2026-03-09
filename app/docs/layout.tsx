import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { docsOptions } from '@/lib/layout.shared';
import { DocsTopNav } from '@/components/docs-top-nav';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <div className="sasai-docs-shell">
      <DocsTopNav />
      <DocsLayout
        tree={source.getPageTree()}
        containerProps={{ className: 'sasai-docs-layout' }}
        sidebar={{
          className: 'sasai-docs-sidebar',
          defaultOpenLevel: 1,
          collapsible: false,
        }}
        {...docsOptions()}
      >
        {children}
      </DocsLayout>
    </div>
  );
}
