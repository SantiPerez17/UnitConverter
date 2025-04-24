export const Length = () => {
    const options = ['millimeter', 'centimeter', 'meter', 'kilometer', 'inch', 'foot', 'yard', 'mile']

    return (
        <form>
            Length
            <div>
                <div style={{ display: 'flex', gap: '10px', margin: 10 }}>
                    <label htmlFor="input">
                        Enter the lenth to convert:
                    </label>
                    <input type="number" name="input" id="input" />
                </div>
            </div>
            <div>
                <div style={{ display: 'flex', gap: '10px', margin: 10 }}>
                    <label htmlFor="input">
                        Unit to Convert from:
                    </label>
                    <select>
                        {options.map((o,i)=>{
                            return (
                                <option key={i}>
                                    {o}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div style={{ display: 'flex', gap: '10px', margin: 10 }}>
                    <label htmlFor="input">
                        Unit to Convert to:
                    </label>
                    <select>
                        {options.map((o,i)=>{
                            return (
                                <option key={i}>
                                    {o}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div style={{ display: 'flex', gap: '10px', margin: 10 }}>
                    <button>Convert</button>
                </div>
            </div>




        </form>
    )
}