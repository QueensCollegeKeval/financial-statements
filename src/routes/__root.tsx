import { TanStackDevtools } from '@tanstack/react-devtools'
import { createRootRoute, HeadContent, Link, Scripts } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>


<div className="min-h-screen flex flex-col">
  <header className="w-full">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-wrap items-center justify-between gap-4 py-5 border-b border-edge">
        <Link to="/" className="text-lg font-semibold text-ink">
          Kissena Baked Goods
        </Link>

        <nav className="flex flex-wrap gap-5 text-sm">

  <Link
    to="/"
    className="text-ink-soft hover:text-ink"
    activeProps={{
      className: "font-semibold underline decoration-brand underline-offset-4",
    }}
    activeOptions={{ exact: true }}
  >
    Home
  </Link>

  <Link
    to="/disclosures"
    className="text-ink-soft hover:text-ink"
    activeProps={{
      className: "font-semibold underline decoration-brand underline-offset-8",
    }}
    activeOptions={{ exact: true }}
  >
    Disclosures
  </Link>

        </nav>
      </div>
    </div>
  </header>


        
<main className="w-full max-w-6xl mx-auto flex-1 px-6 py-10">
  {children}
</main>

<footer className="w-full">
  <div className="max-w-6xl mx-auto px-6">
    <div className="border-t border-edge py-8 text-sm text-ink-soft">
      <p>Kissena Baked Goods Inc., Astoria, Queens, New York</p>
      <p>© 20X5 Kissena Baked Goods Inc.</p>
      <p>A fictional company used for accounting examples.</p>
    </div>
  </div>
</footer>
</div>

        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
