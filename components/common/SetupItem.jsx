export const SetupItem = (props) => {
  return (
    <tr className="table-row">
      <td className="category">{props.category}</td>
      <td className="item">{props.item}</td>
      <td className="item-link">
        {props.itemLink && (
          <a target="_blank" rel="noreferrer" href={props.itemLink}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M166.4,512C166.4,439.04 225.707,379.733 298.667,379.733L469.333,379.733L469.333,298.667L298.667,298.667C180.907,298.667 85.333,394.24 85.333,512C85.333,629.76 180.907,725.333 298.667,725.333L469.333,725.333L469.333,644.267L298.667,644.267C225.707,644.267 166.4,584.96 166.4,512ZM341.333,554.667L682.667,554.667L682.667,469.333L341.333,469.333L341.333,554.667ZM725.333,298.667L554.667,298.667L554.667,379.733L725.333,379.733C798.293,379.733 857.6,439.04 857.6,512C857.6,584.96 798.293,644.267 725.333,644.267L554.667,644.267L554.667,725.333L725.333,725.333C843.093,725.333 938.667,629.76 938.667,512C938.667,394.24 843.093,298.667 725.333,298.667Z"
                fill="white"
              />
            </svg>
          </a>
        )}
      </td>
    </tr>
  );
};