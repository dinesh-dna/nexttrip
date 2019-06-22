import React, {useState} from 'react';

function Detail() {
    const [detail, setDetail] = useState("Ninja");
        return (
            <div>
                Hello {detail}
                <input type="text" value={detail} onChange={e => setDetail(e.target.value) }/>
            </div>
        )
}

export default Detail;