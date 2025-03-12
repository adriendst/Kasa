import "./tags.scss";

function Tags({ tags }: { tags: string[] }) {
    return (
        <div className="tags">
            {tags.map((tag: string) => (
                <div className="tag" key={tag}>
                    {tag}
                </div>
            ))}
        </div>
    );
}

export default Tags;
