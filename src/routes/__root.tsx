import { HeadContent, Scripts, createRootRoute, Link } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

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

<nav className="flex gap-6 p-4">
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

        {children}
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
