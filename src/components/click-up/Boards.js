import * as React from "react"

export default function Boards({ data, boardIndex }) {
  return (
    <>
      {data?.map((b, i) => {
        return (
          <>
            {boardIndex === i && (
              <>
                <div dangerouslySetInnerHTML={{ __html: b?.board?.embed }} />
              </>
            )}
          </>
        )
      })}
    </>
  )
}
