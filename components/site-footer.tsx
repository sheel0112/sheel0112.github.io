export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/10 py-8 text-center text-[13px] text-muted-foreground">
      <div className="mx-auto max-w-[1080px] px-5">
        <p>{"© "}{new Date().getFullYear()}{" Samuel Heel. All rights reserved."}</p>
      </div>
    </footer>
  )
}
