import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-amber-300">
        Welcome to Kissena Baked Goods
      </h1>

      <h2 className="mt-6 text-2xl font-semibold">
        Financial Statements
      </h2>

      <p className="mt-4 text-lg">
        We are a new company. 2025 is our first full year of operations.
        On this site we will disclose our financial statements to our investors.
      </p>
    </div>
  )
}

