import React from 'react';

export default function LearningDetailsPage(props: any) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-4xl w-full p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Title</h1>
        <div className="aspect-w-16 aspect-h-9 mb-6">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/yIsQPp31L0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="prose max-w-none">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget commodo velit.
            Phasellus ullamcorper mi vitae metus eleifend mollis. Ut ut neque vel lacus condimentum
            gravida. Integer id scelerisque urna.
          </p>
          <p>
            Nullam auctor justo id luctus malesuada. Phasellus eu dui felis. Nullam vel sodales sem.
            Duis quis orci id massa pretium ultrices. Nam non magna in quam scelerisque tincidunt
            sit amet at sapien.
          </p>
        </div>
      </div>
    </div>
  );
}
