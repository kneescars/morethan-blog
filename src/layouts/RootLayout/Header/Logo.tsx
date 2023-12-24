import { CONFIG } from "site.config"
import Link from "next/link"
import styled from "@emotion/styled"

const Logo = () => {
  return (
    <StyledWrapper href="/" aria-label={CONFIG.blog.title}>
      <img src="/zd_logo_red_shadow.png" 
        alt={CONFIG.blog.title} />
    </StyledWrapper>
  )
}

export default Logo

const StyledWrapper = styled(Link)``
