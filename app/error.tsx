'use client';

const Error = ({ error }: {error:Error}) => {
  return (
      <h2>OOps!!! { error.message}</h2>
  )
}

export default Error;