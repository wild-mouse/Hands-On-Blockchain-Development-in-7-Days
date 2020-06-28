import React, { useState } from 'react'
import './App.css'
import {
  Card,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
} from '@material-ui/core'

function App() {
  const [playerNumber, setPlayerNumber] = useState<number>(1)
  const [highLow, setHighLow] = useState<boolean>(true)
  const [wager, setWager] = useState<number>(0)

  return (
    <div className="App">
      <Card>
        <CardHeader
          title="Player Number"
          subheader="Will the mystery number be higher or lower than this number?"
        />
        <CardContent>1</CardContent>
      </Card>
      <Card>
        <CardHeader title="Betting Window" />
        <CardContent>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="highLow"
              name="highLow"
              value={highLow}
              onChange={(e) => setHighLow(e.target.value === 'true')}
            >
              <FormControlLabel
                value={true}
                control={<Radio />}
                label="Higher"
              />
              <FormControlLabel
                value={false}
                control={<Radio />}
                label="Lower"
              />
            </RadioGroup>
            <Input
              value={wager}
              type="number"
              onChange={(e) => setWager(Number.parseFloat(e.target.value))}
            />
          </FormControl>
        </CardContent>
      </Card>
      <Card>
        <CardHeader title="History" />
      </Card>
    </div>
  )
}

export default App
