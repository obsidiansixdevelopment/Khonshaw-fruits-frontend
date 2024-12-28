import React from 'react'

export default function FreshGrocery2() {
  return (
    
  <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-8">Fresh Groceries</h2>
    <p className="mb-8">
      Importing and supplying fresh fruits to Iraqi grocery markets. Quality
      guaranteed.
    </p>
    <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
        <img
          alt="Image of crates of fruits"
          className="rounded-lg"
          height={300}
          src="https://storage.googleapis.com/a1aa/image/PK2vLw6SUp5OP1tZGENHSfYtHp7fxL2JLHQKKmPlgcphaCfnA.jpg"
          width={400}
        />
      </div>
      <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
        <img
          alt="Image of a market stall"
          className="rounded-lg"
          height={300}
          src="https://storage.googleapis.com/a1aa/image/7T0M3RvrTpYGDZAgtfa0AOVSllwFh89amDX0F0iDKf9saCfnA.jpg"
          width={400}
        />
      </div>
      <div className="w-full md:w-1/3 px-4">
        <img
          alt="Image of a warehouse with fruits"
          className="rounded-lg"
          height={300}
          src="https://storage.googleapis.com/a1aa/image/ea17WVPGvQw5T6OTbRIzSJFWlLZj8dV4Y3Pe9c1SlFHqaCfnA.jpg"
          width={400}
        />
      </div>
    </div>
  </div>
</section>
  )
}
