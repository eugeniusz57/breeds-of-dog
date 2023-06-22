'use client';

const ErrorBreed = ({ error }: {error:Error}) => {
  return (
      <h2>OOps!!! { error.message}</h2>
  )
}

export default ErrorBreed;