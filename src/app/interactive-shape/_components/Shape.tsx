'use client';
import * as React from 'react';

import { cn } from '@/lib/utils';

// create a shape based on the 2D data
// empty box where value === 1
// when value === 0 then return nothing
// we can select a box and change bgColor to green
// deselect in the order of selection
// disable any interaction
// DS?? Array? Object? Something?

const classes = {
  boxes: 'p-[50px] w-fit',
  row: 'flex gap-5 pb-3 w-fit last:pb-0',
  box: 'size-[80px] transition-colors duration-300 ease-in-out border border-black cursor-pointer',
  invisible: 'opacity-0 cursor-auto',
  button: 'px-4 py-2 bg-gray-400 text-white rounded-md',
  selected: 'bg-green-500'
};

// 2D Array
// [ [1, 1, 1], [1, 0, 0], [1, 1, 1] ]
interface ShapeProps {
  boxes: number[][];
}

/**
 * Component that renders a shape based on the given data.
 * Shape is represented as a 2D array of numbers.
 * Each number in the array represents a box in the shape.
 * If the number is 1, a box is rendered.
 * If the number is 0, no box is rendered.
 *
 * @param {ShapeProps} props - The shape data as a 2D array of numbers.
 * @returns {JSX.Element} The rendered shape component.
 */
const Shape = ({ boxes }: ShapeProps): JSX.Element => {
  const [from, setFrom] = React.useState<'start' | 'end'>('start');

  // count of visible boxes
  const countOfVisibleBoxes = React.useMemo(
    () =>
      boxes.reduce((acc, row) => {
        row.forEach((column) => {
          if (column === 1) {
            acc++;
          }
        });

        return acc;
      }, 0),
    [boxes]
  );

  // Array, Object, Map,
  // Set => Uniqueness is guaranteed, as Set does not allow duplicate entries.
  const [selected, setSelected] = React.useState<Set<string>>(new Set());

  const [unloading, setUnloading] = React.useState(false);
  const timeRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    const index = target.getAttribute('data-index');

    if (index === null || selected.has(index) || unloading) return;

    setSelected((prev) => {
      const newSelected = new Set(prev);
      newSelected.add(index);

      return newSelected;
    });
  };

  const unload = React.useCallback(() => {
    setUnloading(true);
    // remove boxes every 500ms
    const keys = Array.from(selected.keys());

    const removeNextKey = () => {
      if (keys.length) {
        const currentKey = from === 'start' ? keys.shift() : keys.pop();
        setSelected((pre) => {
          const updatedKeys = new Set(pre);
          updatedKeys.delete(currentKey as string);

          return updatedKeys;
        });

        timeRef.current = setTimeout(removeNextKey, 500);
      } else {
        setUnloading(false);
        if (timeRef.current) {
          clearTimeout(timeRef.current);
        }
      }
    };

    timeRef.current = setTimeout(removeNextKey, 100);
  }, [from, selected]);

  React.useEffect(() => {
    if (selected.size >= countOfVisibleBoxes) {
      unload();
    }
  }, [countOfVisibleBoxes, selected, unload]);

  const renderBoxes = () =>
    boxes.map((row, rowindex) => {
      return (
        <div className={classes.row} key={`${rowindex}`}>
          {row?.map((column, columnIndex) => {
            const identifier = `${rowindex}_${columnIndex}`;
            const isSelected = selected.has(identifier);

            return column === 1 ? (
              <div
                key={identifier}
                className={cn(classes.box, isSelected && 'bg-green-500')}
                data-index={identifier}
              />
            ) : (
              <div key={identifier} className={cn(classes.box, classes.invisible)} />
            );
          })}
        </div>
      );
    });

  return (
    <>
      <div className="flex items-center gap-6 mt-4">
        <button
          onClick={() => setFrom('start')}
          className={cn(classes.button, from === 'start' && classes.selected)}
        >
          Unload From Start
        </button>
        <button
          onClick={() => setFrom('end')}
          className={cn(classes.button, from === 'end' && classes.selected)}
        >
          Unload From End
        </button>
      </div>

      <div className={classes.boxes} onClick={handleClick}>
        {renderBoxes()}
      </div>
    </>
  );
};

export default Shape;
