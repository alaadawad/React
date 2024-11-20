import TagButton from "./TagButton";

export default function SideMenu() {
  const categories = [
    {
      id: 1,
      Title: "اخر المقالات",
      cildren: (
        <div>
          <span>😇😇😇</span>
        </div>
      ),
    },
    {
      id: 2,
      Title: "اكثر قراة",
      cildren: (
        <div>
          <p>alaa</p>
        </div>
      ),
    },
    { id: 3, Title: "مقالات الاسبوع" },
  ];
  const categoriesList = categories.map((cat) => {
    return (
      <TagButton key={cat.id} Title={cat.Title}>
        {cat.cildren}
      </TagButton>
    );
  });
  return (
    <div style={{ border: "solid teal 5px" }}>
      {categoriesList}
      {/* <TagButton Title="اخر المقالات">
        <div>
          <span>😇😇😇</span>
        </div>
      </TagButton>
      <TagButton Title="اكثر قراة">
        <div>
          <p>alaa</p>
        </div>
      </TagButton>
      <TagButton Title="مقالات الاسبوع" /> */}
    </div>
  );
}
