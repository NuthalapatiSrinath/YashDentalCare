// ContactUsPage.jsx
import React from "react";
import styles from "./ContactUsPage.module.css";

/**
 * ContactUsPage
 * - Hero with title (left) + breadcrumbs
 * - SECOND centered "Contact Us" heading below hero
 * - Appointment form (left)
 * - Right-side contact cards with inline SVG icons
 * - Full-bleed Google Map below (no left map details)
 *
 * Make sure ContactUs.module.css is in same folder and images referenced (hero) exist.
 */

export default function ContactUsPage() {
  const query =
    "      Plot no.117, yashpolyclinics, telecom nagar, Gachibowli, Hyderabad, Telangana-500032";
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    query
  )}&output=embed`;

  return (
    <div className={styles.page}>
      {/* HERO */}
      <header className={styles.hero}>
        <img
          className={styles.heroImg}
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIWFRUXFRUXFxUXFRUVFRUVFRUXFxUVFxgYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS0vKystLS0tLS0tLS0tKy8tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLSstK//AABEIALABHwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAQMEBQYHAAj/xAA+EAABAwIDBQYDBgYCAQUAAAABAAIDBBESITEFBkFRYRMiMnGBkQehsSNCUsHR8BQzYnKC4RUk8VNzkqKy/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAIDAQQF/8QAKBEAAgIBBAEEAgIDAAAAAAAAAAECEQMSITFBUQQTIjJhoXHxgZGx/9oADAMBAAIRAxEAPwDtSVIUqYwVEEKJqwBV5KvLABKUJLL2JaaEU1IxE2UHIEE/RFZAFJNBaW/MfRPPbcJ6tZ3mnzWf3r2u6GPs4c53ghg1DBxe7oFaKcqJS2Mjvnt2aWcUVEAXNIM8nBg1LR1tr5hVmzt9o4u0fK9mBncbEG/9iR4Ob8z3W+a9RbMdROEj5JTI695ogMTCcyS03xg8RYqTtYU9S3FVRR1A4VVMMMzP/cj1PpfyXRKLXHBJSTNZu1t6lrBeCUE8WHJ7fNpzWphhAXCNh7ngTmSCftG/ckALSL8DyK6XsL/kA8M7QPbxLhew89bpJQ2uxlLejaAIwoYqHt8TPUKTFKHaKDKkpqJQX1Tw6wYD7p2OR5OYACnQ4+SkZyXg1RNpbShp29pNIGN5nUnkBq49AgCcvLCV3xNgBIhgll6m0bT5Xz+Sp3/FiQHOkAA177rjz7vnwS2jdLOpry51R/FWI/zKd7erXNf652utZsfeelqWgxytBP3XENcPME+a0wuCE06QDIo45GuzaQfIg/RN1UdxfkgATOEJqAmMKUNQA4Z0oN0IYnWBBgPZL3ZBOrxCABASry8tA8lXivBAChE1CEaAPApUISoAQoeKUoZFoBxxgaeqJMwTXyOqfSmlXt572RF0YBcCLX0uTa56C91S7J2OWNc+V3aTPN3vI9mt5NHJaParbxP/ALT8lApHXaFeEnpJSXyMF8TopI44ZIg4YZCXPaMmgtyxdCea547ahmlaMBbM4hoki7pJ/qGhXT98a2R8hha8RwiP7eQ6BpOTQOLjmqHagZSUzHiAQjP+HiI+2leRbt5eIABuBrmPJdcJuMUiEoqTNduzsnBGwW7xzPMlbKlpgwW48VXbqU8gponTNtKY24hyNtD1VzZcWWepnTCNIHCvNiGtkL5wMtTyCYklcchkpjkoheCCJtgmquTKwNidTyH6rG6BK2eqKi2TbX5nMD9fJZ6o3ahmk7WoL5n8MZ7rR+FjGgAD58yVcMajCjKVnRGKiQYdjQN0ib7Jmr3fp5NYwDzAsQrVeSUNbOf7V3Ajv9kcPT1VBtDdMMP85rSBpc+oz8vmutyhc838hIOME21uDotTaBxTRiKHaVXQSl8BuR4rHEHjiHNv3h+xZdI3X+LNJORFVf8AWm079+zeejvu+Tvcrlcs1zcH9jh9f3pX1M7DfE1rhzIB+eoVkyDSPp4YXDE0gg8QvALh/wAL98P4OQU0jj/DvNrHSJx0c3+nQEdb8M+34vUcDzCYQMBGE1iTgKywCSLy9daYIvLyRaARSBKUgQAQRIUSAPLy8kKAFKRwQ8UTloABi9DLwOqMJl7c0APytuCOYVV2XZgjgNPJWcUl8io+0KUyRuYDYlpAPUhbB0ZJWcw2htWOHFWTDH33Cmh4SSDIyu/pboPXmFH3GpJNo1jq2sONkVsI+72mrWNbybrbyWL2q6eorHwvbgMJMQYdImM4+vivxuF3Pc/ZTYaSGMfhxE83OzJ+a6sj0xvyRhvKvBc/xZPhHugdjdqVILQEsbVxlwYYA1G0cUrzwWR+Im2pKWJpjtiOKwPhfYZtvwOd+eXQoAPequrDdtK+ONovcn+Y49LggBVu7e1at0gjnzyOoF7gjO411VHu5tOaRn/YY7CHdmKkG7XOFhaRmI2zsLg28ludlUZaMThbodf/AAuaUpN0dkYRStFkHKtn3gp2Gz32PkTb2U2aUALJV+zoiCXE24+V0rlQyhZqaPasEvglY7piF/Y5qYVzlm69PJk2Vzf7cJF8jp81a0uz62kbeKYTxDWNwOK3Tl6ey1NMWUWjWvWO3pZcFp0/0tJsjabKiPG3I6OafEx3EFRd4KHtYzbxDT0WSGgcC2jGYZSOBPA2seFvkoNS9p4W69R+S1O9dEHtxaOb3XdLEZnpm0+TlkJHd3EddH9COI87e4CrCVojkjTPRv8Advl724rsHwu33L3CiqnHE65gkJvi1LonE8eLTxFxqM+MONjiHqOnT0zT9NKQQ0Eg3Do3DItc04hY8NLjkQE5OrPrF0Z4ZpWLP7g7zNrqNkpP2g7ko0tK0DFlwBBDh0cFogE1CHihuklckBWgHdeQpboMDGiFE1CUAGESFhRFAHrJCvXSG60AC7O1k4U293ROBACpspwoSsAEtRMekKaeFoHPPiVu40SisBwxuAbU4QcT7ZR2tzvhPoui0rLMaBkA0C3IAJuQB7S1w1CcbcADoE0puUUn0LGKTbXYRTjU00Jx5SDCDmqna0ImLWlrS0G9yAc/6R+9VJnqPZUVRtVzZi0sOENu1wzDuYPI5jz9FHJkXB1YsLe5aUlBHEO42x5/vII5HEqjo964HvET3GJ7tGygsJPJpPdcegJV0pXZXS09xuWG4+q5pv1LO5+COORrAHd/CbPv90WOmWptmAuqgKLUUl87XWNdmqXTObbLgqoKdtU77aIkh7RczQgWGNuZLtDcXPdAPQa3d/brXgAPDwQC140c08fMcf3aZVbFik8TLHmMj7hZzZ26TqR7uzcTGXF1jmWOOtjxB4j1RJ9oIrplzXkU9THMzJkzhHKBoXO/lu87/mriokyJUKoo+1iwO6EHkWkEH3CkP0shvYyjmO+D2R1GI+B/deOetj6jF7Bc6r2GKVzdRe2XEHNpHPID2W/+IUBaPMZHkWm9lT0fw82lVRtnbC1rXNFmyPEb3N1FmkZcPFbTqq4laJZXT3MXUdOFiPK5t6A5eQTeM4ctW5jy/f0U/bmxqmkdhqoHxHS7h3XA5HC8Xa7RrsidCqzQ262Plr+/NVojZ0X4RbwGGtZG5x7Opsxw4CTPsz0OK4/zX0EMgvkLYtQ6NwcDZ0cjXNPItN2n0Iuvo3ZO+ocAJmCxHib+YQvAsvJd1NaO0Dbqc0rNVkbcfbsfjjdofwn8J6q8oKgOaCrzglFNHJhySc5RkS0qHElxKR0jo1SPSNKJ6APRpwJGpUAeKFKkJWmjcicYU1IVHkrLDJbVitpExzkHbN5qnEwGXBKKkJlAm8pcNeDxSEKpM3G+X71Sip6rfbM94sw1KSokdZYgHibKQkaaKRkpcDkZQ1r7Mcen1y/NOMCh7Uf9mfMfVJLZMpBXJIpJ6m7sN7czyH6pS6N4sD75FVsVJJPMY2uDGsa1z3EXu55OXn3T6AKbUbElZdzSHAehPp/tciVqz1F7d03QG0N34KiMxzRte08HZ+VjqnaWgljDWNcMDQALkk2Ggz/VRqXaBhcGvBbf7rgRlzCvYp2vF2nJYooJ6o78ryFC/gpIUK9neakCZPFnPJDrgmnpt8yakmQ2gUWJI4BME301QtcXOsM1Z09OG+fNGPG5i5cqxr8la3YET3tkmYHlpxNa4Xa1w0dbiRw5K4ukc/lmlXdGCiqR508jm7YM7WuaWvaHNORa4BzSORByKyO1/hrsydrg2mELyMnwksLTwIYDgI6EWWusiW0Ym0fN28u4NZs/tHuZ2kP/AK0Yu0DS726x888upWio69pAsb5Bdwsqys2BSS+OniJ5hjWu9HNs4ehSaSnuXyYDdfboZUNjfnHI5rHtOY7xsHeYJC6d/AYPBpy4j9VjNo/D+LG2SCR0Za5pwu77CAb2B8Q8ziXQGSX0z+qHaMWluyFdLdSJ4b5hRkhQmhiJNFxRRhaYOJCUqElACoSgdIBxTTqhaB6sd3fMhVFa1xacAueSnVMwKhPmCrDY5srtlBNT15IwxxW/qlcLdDhYVIj2PVEXdOwHg0RucAPMuBPsFaGdCKpV1MgscVy2QDsmpGYqGX6xuH0f9U5HRVA1kjP+Lh+akvrQBckAfXyTB2m3gfmLe6ZOTFagu/2Ny0NTdrmyxNDSHYcLjitmBcmzRfoVZU+133wyR97LNrmkHyJIVTJtVh4+3ePsE3DVXc04XYQQSXAsFgb2AOayWPUrZsM2l1E2fbjK4LT1HHlfRQtpv7o8/wAipr3gjoR9VV7UeGtvwBv7A/quGf1Z6uL7o5xvJtp1FUySXxska0PjJIALNHNytizI636Kjqt+5oftqWpJaHZwPGJjbfdcDm3/ABIvrdarebdGKvAcJHskbmCBib/k3j6EKkpPhq2ElxvI/i4jIHo3h63PVc6VbnqSh1/00W6+/lNtFvZVDBFUOLmtYWvwOba4cx5FhxyNjlxUx4loZNTJFa7yB4PNZSo3LDh3s+lipuyP+SZ9gWCanta0jg0gCwHfzcRbmD+uS33FjCUFtx4N/DO2QBzTcEXBHJEXqJsij7KPDkMybDRtzewT8hSCUgS/NRqifgNdFMjpy7T34BOsoWNN/E7meHkFSGKU/wCCOXPDGt+R6gpgxvNx1P5JyolAGvztcnQJoy2TFO7tXYs7MOhy735gfvRejGCS/B5M8jk/yybFHYfvXijJQPfZBA4km5vmijLrYeCUryakesGsLElAQsTmOyGCYhUSR+FwBuATZrhq1x0HqpBeE3M0OBBzvqOf6Hqmi/Ik1a2GjvNCyeOmlJa+RmJjiO48tJa5oPBwsDY/iFr52uXsDlltr7MFQxuEjtoZWyxuto9pBcw/0yMLmkaWf0UjYVUYpX0b34iAZYSdTA55AZfiWXa2/Jzb53KhNVKjoxyuFmhDUqiQ1gc7CFLssHEv0SYb6hElQAyYRySGLonl5aBTbQhwuvz+oUR8YOqtdpG7b8jdUss1tP1+ivC6OTKkmNybOadHvb5O6/1AoG7Hi4l7j1kf9AbLzqsjgfZMS154NcfT9SqVIjcCX/x1ODfs2k8yMR9zmicIx91vsFWukldwDfM3P5IqfZ0kptiJ5nwtHnZH8sy+ookT1bQrGg2SX2dKA0a4PvHo7kOn0UjZux44u8Bif+IjTyHD6qzcbBSnl6idOPA+Z/6GKl6q61+gUqWS5TQaDmuXK6jR34VcrK/IGwGv1Svlc4Btic9QDcc724fmpslOPzVW7YrTUioL3kgABl+6LCwP1PmbqKkqplnGSnqiT4tnniHH0Kf7AgeG3yTduaFxHJI2ircnyyR2OXjYPNwTXZsHimjHm4D1HMKLgBN7D2RkgcEj+yrjsWpeSTLWxAWE8YHqfolgkBFwcQOYPMcD+fqqOrgZY91ud/uj1VrSDCxo4YQB6AL1Mc4yXxf6PIzQnGXyVfm7sdqHZX5C5KibLqe40jR3e/8Aln+aj7cqbROHMW1t6qBsechgBysMvLgrJx+vZBqX3XC2NBPUu0b4jkBYa+oUymjLWhpNyBmchc8TYLLzbVMc0bnAYc2k8sVrE+3zWgNe22qycWtjcc07ZKe9R4SXknQDIdeqgMmdO8sZ4W+N3zwjrb2urYWaLDIBLwOvlv0GSAo8r0pddQquvZH3QQX/AP5vxK1KzJTSDxEHMp4SqtfUgNBvfqo1TtCw7viOQvoOp6BNovYT3ElbJ+zJiZJTwJaB1IBv8llK/buHsqxl3GCWoifoS5hLo/ugWGJjTzyUHeXeb+EiMcTj2hBzBzBIzcf6unAWWF3f22Y6Cr7Q59rG6Npz7QSOPa2GpsWtd/kSuf1MvmnDr+jp9HB+29e1/wBn0bQwht1Muo8aeBySlgrr100HJQUAOXQTOsEqZqTp6oXIN7EHa1Tghe86Nbc+Q1VbJGATbhr66KXvDB2lLOzi6GQDzLDZUGx68TRMlBuHxtxcw4D6HNXx1wcudNLUWRITUjgo0M9zhJu4f/YcHD8+qclfYZD1OfyVdNOmc3uJq0Qq6sIybrz5LRbAgMcLcXid3nX1z0+QCpdlbNxvxv8ADcnP7xvew6LTtcpZWuEdHpoutUh4vUaeoyTxUaWLPoonWRw9ejktkiwhNy2S5IalsUx5NLH3yJvEovbIXyrkkmuTsjJSWxKdIm3OUTtV4yqY9EklMSypl83VRpJllm0JUSK6jzYLcgfks696ch2i6IEa8hddHpssYSeo5PV4ZZIrTyhveerDQ1pGI3uW3te3NQodtRYbuu0jUWuPcKDtGVz3Fzjcn5dAsTvhtbsmiNh77tejeJWZJ+5ktf4GxY1hxaZb+TR7y7/0sYLRG6V3Bos1uX4nXOXkCsxTfFepY44oY3N+60FzXNHDvXN/ZYGaQk5ppdSnNcs45Y8btKKR2ncb4rRGR8dS0Qh5xNkLi5uM5ODyQLDIWOmt10Wfb8WAyl7RGBcvxDBbnivZfMMeynPiMsZxAEB4yuy+hI5HS/RWWyN2XSTNhkc4XdYiNuJ2XHvEAeadZO2TeHqLo65s/wCIhqqiSKmH2cYF5CM3kk+EHQZanXorWL7Rzjiu6+d+JsCD0yIPkQs3S7Bioi1sTciM3nxOI/EVK2jJLGY5oBiFiyRl9W+JhHUEvHqAq4sjYmXBHhoodufEGSGV8Bpy2RmRMsl28wQGjMEZ3uqSf4h1D8TQ2MHTuCQu+f5K73hlo67C2oxU04Fo53MIy/A8G2Jl/bPqslPSy0L+zlY1pcAWvaQWSt4OY4eIdNRyCzIprl7G44Y/BHqKmoeC4sIvq6TL2BzK0Xwq3YNZUmeoaXU8QcCTpJI4WawX1sCXEDSzeam7B3HqqxzXVAfT05Fy42ErxwEbDcj+5wAHVdWoqOKmhZDCzBGwWa0ZnM3JJOZcTmSkjCuC05GqaUpfkm7pbqSNY4xECmw7JKHBMAd01VOzb6/knbKv25IWtY4cHj6FbFWxZOkOuzXGd3tpGmmlhvkySRhaeTXkLr8NQ1wHVcM+Imzain2jNIyKR0UhbIHMY5wBc0BwJAyOIE+q1p9BBrh8M6DT0zXntY5i1upbkcJ5Z6fXzVVWbexydhBIXuuGuIt3SfIZLneym1ta90UfaxsaPtCMTSeTV1fcLcxtO0PcBfgORXUs703Jbnny9FFS+L28GjpKfw8mgBvkOPmdVZxImxIw1crdnVBUICmpA4m2gvr0TkjrC6jOnuhKyuobrp2RNxPOWgAzc48gOJTVJDJKMRiMYOmI972/8KZQsDiXkZjJt+A6eaZ3i27HSRGR5F7HC29i4/oi0th4xlJ7foQ7OIPAqpdmT5rPbp781FY+RhibgB/md4WBB7ttC4ZcdCtJGxQ9RcZaH0WwK46ht0ZQWU/s8k2YFxNHWmQHMQmFWQp0XYpaGTKrsrKJO1W9QywVTUaLFyMUG16tsMb5HHJoJ/0uM11W+aR0rzm4+w4ALoPxPnwwsZ+N+fk0XXNrrswx2s5M8rdDLxZIlcUKscwTJCL2JFxY2NrjkeYXbfh7XwzQBzAO1AAkyGLLIC+pC4iVabu7bko5myxn+5vBzeRWSVoaLpn0RLSB7S12h9xyI6qq2cXwy9k/0P4mnI26/Qq52HVtqoGTx5te0EdOYPUKRX7PDmZizgbtdxaf06JccnFj5FGSIMdQLlkga4tNjcN5Ag5jQgg+oU+iEbQAxrGAZ2Y1rbE6nugZqtqonEYxcSMbm0AkSMBubDmMzlwuOAtDh23DpiAPLMfJegqkjhdxZpXTAcb/AL5qJUVY/fBUU+12AWxWFzxVTW7aJ8AxfRbpSMts6+vXSLy4TqFLsksaFE02TWZQdlX7xH7Jp5PF/YqxZmoG8UJfTvA6HLkCCfkng/khJrZlPHWsaM5APmUVYWyYXteQ5vEXbdp4HmqWmiaNBcq1poXOOiu0k7RJbqmPxU5fZoN7nPoOJV/FEGgAaBNbPpcDc9SpRUJOx0gCEBRleASgAGqJJSG4I0Oo5KdZBUPDWknhw4k8APMrU6Cip27tYQYWN1Iu4j7jMw02tm4usAONnciuRbRgrNpVJEmTMRu7KzGXOFthlitwGWd107aewZZmlxfZznYnNtrwFjwAFgB0vqSmaWjEYwBtrZdVzzySjca2ao7fTqmpp014I2wtlR07BHG2zQPc8SeZVxHGvRRWT4C5yzdng1eIRsKKyGCADUEjU8EDwlGRX1QyVLVK9qdCqdsV81NlEYnfbZRqIsI8Qzaev7yXIaiNzCWvaWniDkvomqpLgrNSbosqpBjiL2NJsGnC9zha7A64szMFxOlwB3nBdGCe+k5/UQ21HFl5Xu8+6lTQu+1ZdhJwyNBwHPQ38Luh+aol1HIEWobpyIpyGIF7QdCR81g1HT/gbtd4fNTl12YQ8NPA3AJHyuuvufdYXcjdSKivLGS9zwDd1rhhF8ItwutYKx17WWGUTMGhtmDcFV2293I5B2gYC08LZt5i6mOkdZDS1z2E6EHVp0/0VSE6FlGzG1O7TR4b+Wqt9ibpOPeeMI6jNaaOuivd0RB6EO+tkcm2LeBg83E/QfqqvKhFAtF5JdGGc1AoCiDUQ6IXygalABgckrnAgtPEW91EfOTpklhjN1qYEan2YxujfVToaUDNP4UYCdybEpIQoHFE4pAFgogCSyKy8gBLIXNujK9ZBoKB0QOoB9E5ZLZYBDfRN4XH76qPLSPGlj8j7K0svWSSxxZSOWSM/FNnY5HkcipYKsZaZrvEAfr6FRJaJzfDmOR1/wBqEsTXB0RzRfOwwUJRheLVKi1kKobkVCbFYZq4cxZDfeWYRlkNg0Me6Z2KzmsaL2HnnyOg4psWH3JqF1fbCeXRByq6KXbu9Fn4IA1wBs5xBIJ/C22vmulbGpWthY/Bgc5jCQdW3F8B8iT6knUlZD4e7o3w1M7QRkY2H5PP5LoE7+C9KUIY0saStN3JdnFPJrl7kW9LSdPp9lHtfY8VQySKRocyQWcDxyyPmOB6BfNu/O6Muzp8DruidnHJ+IfhPJw/2vqRwVPvRu/FW07oJhkdCPE1w0c3qErjaJpnyepdPZwA46fop+9u7M+z5zDMLjVkgFmyN5jkeY4eyp2OINwoyRWLPpbdOpE1JC8a9m0Ho5osforF8Wd1zT4P7wd80zzk4FzP7h4m/muq1LOKVMatxMGSjTC2anMFwoO1cmEplyIyFSVeJxB0Uesry19mi4VZCCTkrWCm5qtIjqZ//9k="
          alt="Contact Us hero"
        />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Contact Us</h1>

          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <a href="/" className={styles.breadcrumbLink}>
              Home
            </a>
            <span className={styles.breadcrumbSep} />
            <span className={styles.breadcrumbCurrent}>Contact Us</span>
          </nav>
        </div>
      </header>

      {/* SECOND TITLE BELOW HERO */}
      <div className={styles.pageTitleWrap}>
        <h2 className={styles.pageTitle}>Contact Us</h2>
      </div>

      {/* MAIN TWO-COLUMN */}
      <main className={styles.container}>
        <section className={styles.leftColumn}>
          <div className={styles.formCard}>
            <h2 className={styles.formHeading}>Make Appointment</h2>

            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.row2}>
                <input
                  className={styles.input}
                  placeholder="Name"
                  aria-label="Name"
                />
                <input
                  className={styles.input}
                  placeholder="Email"
                  aria-label="Email"
                />
              </div>

              <div className={styles.row2}>
                <input
                  className={styles.input}
                  placeholder="Phone No."
                  aria-label="Phone"
                />
                <input
                  className={styles.input}
                  placeholder="Treatment"
                  aria-label="Treatment"
                />
              </div>

              <textarea
                className={styles.textarea}
                placeholder="Message"
                aria-label="Message"
              />

              <button type="submit" className={styles.submitBtn}>
                SUBMIT NOW
              </button>
            </form>
          </div>
        </section>

        <aside className={styles.rightColumn}>
          {/* Office Address */}
          <div className={styles.infoCard}>
            <div className={styles.iconWrap}>
              <svg
                className={styles.iconSvg}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M3 6.5v13L9 17l6 3 6-3V4.5L15 7 9 4 3 6.5z"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 4v13"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={styles.infoBody}>
              <h3 className={styles.infoTitle}>Office Address</h3>
              <p className={styles.infoText}>
                Plot no.117, yashpolyclinics, telecom nagar, Gachibowli,
                Hyderabad, Telangana-500032
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div className={styles.infoCard}>
            <div className={styles.iconWrap}>
              <svg
                className={styles.iconSvg}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.6"
                />
                <path
                  d="M12 7v6l4 2"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={styles.infoBody}>
              <h3 className={styles.infoTitle}>Working Hours</h3>
              <p className={styles.infoText}>
                Monday to Saturday
                <br />
                10:00AM to 2:00PM, 5:00PM to 8:00PM
              </p>
            </div>
          </div>

          {/* Message Us */}
          <div className={styles.infoCard}>
            <div className={styles.iconWrap}>
              <svg
                className={styles.iconSvg}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect
                  x="2.5"
                  y="5"
                  width="19"
                  height="14"
                  rx="2"
                  ry="2"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.6"
                />
                <path
                  d="M3.5 7.5l8.5 6 8.5-6"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={styles.infoBody}>
              <h3 className={styles.infoTitle}>Message Us</h3>
              <p className={styles.infoText}>yashdentica re1@gmail.com</p>
            </div>
          </div>
        </aside>
      </main>

      {/* MAP SECTION – FULL-WIDTH IFRAME ONLY */}
      <section className={styles.mapFullWidth}>
        <iframe
          title="Office location map"
          src={embedUrl}
          className={styles.mapIframeFull}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}
